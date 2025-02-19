import CartItem from "../components/cart/CartItem"
import AuthLayout from "../layouts/AuthLayout"

const Cart = () => {
    return (

        <AuthLayout>
            <div className="flex flex-col gap-5 p-5">

                <h2 className="text-4xl font-bold">Shopping Cart</h2>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">

                    <div className="lg:col-span-2 flex flex-col gap-5 bg-white p-5 rounded-lg">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-5 rounded-lg">
                            <h3 className="text-2xl font-semibold">Order Summary</h3>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-lg">Subtotal</p>
                                <p className="text-lg">$100</p>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-lg">Shipping</p>
                                <p className="text-lg">$10</p>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-lg">Total</p>
                                <p className="text-lg">$110</p>
                            </div>
                            <button className="bg-black text-white w-full py-2 mt-5 rounded-lg">Proceed to Checkout</button>
                        </div>

                    </div>


                </div>

            </div>
        </AuthLayout>
    )
}

export default Cart