import { GripVertical, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { addItem, updateQuantity } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { notification } from "antd";

const CartItem = ({ id, name, price, description, image, onRemove, initialQuantity, listeners }) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);
    const dispatch = useDispatch();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        handleQuantity(quantity)
    }, [quantity])
    const handleQuantity = (quantity) => {
        const cartItem = {
            id,
            quantity, // Set quantity to 1 when adding an item to the cart
        };
        dispatch(updateQuantity(cartItem)); // Dispatch addItem action to Redux store


    };
    const handleIncrease = () => {
        try {
            setQuantity(prevQuantity => prevQuantity + 1);
            api.info({ message: 'Item quantity added', placement: 'bottomRight' });
        } catch (error) {
            api.error({ message: 'Failed to add Item quantity ', placement: 'bottomRight' });
            console.error(error);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            try {
                setQuantity(prevQuantity => prevQuantity - 1);
                api.warning({ message: 'Item quantity decreaced', placement: 'bottomRight' });
            } catch (error) {
                api.error({ message: 'Failed to decreace Item quantity ', placement: 'bottomRight' });
                console.error(error);
            }
        }

    };

    return (
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4 shadow-md p-5 rounded-lg ">
            {contextHolder}
            <div className="flex lg:flex-row gap-5 flex-col items-center h-full">
                <div className="cursor-move" {...listeners}>
                    <GripVertical />
                </div>
                <img className="lg:w-64 w-32 object-contain" src={image} alt={name} />
                <div className="flex flex-col justify-between gap-5 lg:min-h-54">
                    <h3 className="text-lg text-center font-semibold">{name}</h3>
                    <div className="flex lg:justify-start justify-center gap-2 items-center">
                        <button
                            className="bg-black/30 rounded-2xl text-white flex items-center justify-center p-2"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <p>{quantity}</p>
                        <button
                            className="bg-black/30 rounded-2xl text-white flex items-center justify-center p-2"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between lg:items-end items-center lg:min-h-54">
                <p className="text-lg">${(price * quantity).toFixed(2)}</p>
                <button
                    className="text-red-500 flex gap-2 items-center justify-center"
                    onClick={() => onRemove(id)}
                >
                    <Trash /> Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
