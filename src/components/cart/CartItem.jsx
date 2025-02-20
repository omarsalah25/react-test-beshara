import { GripVertical, Trash } from "lucide-react";
import { useState } from "react";

const CartItem = ({ id, name, price, description, image, onRemove, listeners }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4 shadow-md p-5 rounded-lg ">
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
