import { Button, Carousel, ConfigProvider, message, notification, Result, Spin } from "antd";
import AuthLayout from "../layouts/AuthLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [api, contextHolder] = notification.useNotification();



    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);


    if (loading) {
        return (
            <AuthLayout>
                <div className="flex justify-center items-center h-screen">
                    <Spin size="large" />
                </div>
            </AuthLayout>
        );
    }
    const handleAddToCart = async () => {
        try {
            // Simulating an async operation (e.g., API call)
            const cartItem = {
                ...product,
                quantity: 1, // Set the quantity to 1 when adding an item to the cart
            };

            // Dispatch the addItem action to Redux store
            dispatch(addItem(cartItem));

            // Show success message using Ant Design message component
            api.success({ message: 'Item added to cart', placement: 'bottomRight' });
        } catch (error) {
            // If something goes wrong, show an error message
            api.error({ message: 'Failed to add item to cart', placement: 'bottomRight' });
            console.error(error);
        }
    };


    if (!product) {
        return (
            <AuthLayout>
                <div className="text-center text-lg  h-screen flex justify-center items-center"><Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" href="/">Back Home</Button>}
                /></div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout>
            {contextHolder}
            <ConfigProvider
                theme={{
                    components: {
                        Carousel: {
                            arrowSize: 26,
                        },
                    },
                }}
            >
                {/* Images Carousel */}
                <div className="flex lg:flex-row flex-col p-5 w-full min-h-screen justify-around items-center ">
                    <div className=" w-fit max-w-96 p-5">
                        <Carousel arrows infinite={true} draggable className="w-full h-full">
                            <img
                                src={product.image}
                                alt={`product-image-${product.image}`}
                                className="w-full h-full object-cover"
                            />
                            <img
                                src={product.image}
                                alt={`product-image-${product.image}`}
                                className="w-full h-full object-cover"
                            />
                        </Carousel>
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 w-full pl-5">
                        <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
                        <p className="text-lg mb-3">{product.description}</p>
                        <div className="flex justify-between w-full items-center">
                            <p className="text-xl font-bold mb-3">Price: ${product.price}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white
                             font-bold py-2 px-4 rounded duration-300"
                                onClick={handleAddToCart}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </ConfigProvider>

        </AuthLayout>
    );
};

export default ProductDetails;
