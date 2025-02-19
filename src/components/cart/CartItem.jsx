import { Trash } from "lucide-react"

const CartItem = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-center gap-4 shadow-md p-5 rounded-lg'>

            <div className='flex lg:flex-row flex-col items-center h-full'>
                <img className='lg:size-64 size-32 object-contain' src='https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' />
                <div className="flex flex-col justify-between gap-5 lg:min-h-54">
                    <h3 className='text-lg text-center font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                    <div className="flex lg:justify-start justify-center gap-2 items-center">
                        <button className="bg-black/30 text-white flex items-center justify-center size-6">-</button>
                        <p className="">1</p>
                        <button className="bg-black/30 text-white flex items-center justify-center size-6">+</button>

                    </div>
                </div>
            </div>
            <div className="flex flex-col  justify-between lg:items-end items-center lg:min-h-54">
                <p className='text-lg'>$109.95</p>
                <button className="text-red-500 flex gap-2 items-center justify-center"><Trash />Remove</button>

            </div>

        </div>
    )
}

export default CartItem