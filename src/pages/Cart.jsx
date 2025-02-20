import { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from '../components/cart/SortableItem';
import AuthLayout from '../layouts/AuthLayout';
import { Empty } from 'antd';

export default function Cart() {
    const [items, setItems] = useState([
        { id: 1, name: 'Fjallraven - ', price: 12.95, image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', quantity: 1 },
        { id: 2, name: 'Fjallraven - Foldsack No. 1 Backpack', price: 109.95, image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', quantity: 1 },
        { id: 3, name: 'Fjallraven -  No. 1 Backpack', price: 13.95, image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', quantity: 1 },
    ]);

    // Set up sensors for drag-and-drop interaction
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // Handle drag end event
    function handleDragEnd(event) {
        const { active, over } = event;

        // Ensure both active and over are valid and not the same
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                // Reorder items using arrayMove
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    // Handle removing an item from the cart
    const handleRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd} // Handle when the drag ends
        >
            <AuthLayout>
                <div className="flex flex-col gap-5 p-5">
                    <h2 className="text-4xl font-bold">Shopping Cart</h2>
                    {items.length === 0 ? (<Empty description={'No Items Added'} />) : (
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                            <div className="lg:col-span-2">
                                <SortableContext
                                    items={items.map(item => item.id)} // Pass only the ids of the items to SortableContext
                                    strategy={verticalListSortingStrategy}
                                >
                                    {items.map((item) => (
                                        <SortableItem
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            initialQuantity={item.quantity}
                                            onRemove={handleRemoveItem}
                                        />
                                    ))}
                                </SortableContext>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-white p-5 rounded-lg">
                                    <h3 className="text-2xl font-semibold">Order Summary</h3>
                                    <div className="flex justify-between items-center mt-5">
                                        <p className="text-lg">Subtotal</p>
                                        <p className="text-lg">${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-5">
                                        <p className="text-lg">Shipping</p>
                                        <p className="text-lg">$10.00</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-5">
                                        <p className="text-lg">Total</p>
                                        <p className="text-lg">${(items.reduce((acc, item) => acc + item.price * item.quantity, 0) + 10).toFixed(2)}</p>
                                    </div>
                                    <button className="bg-black text-white w-full py-2 mt-5 rounded-lg">Proceed to Checkout</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </AuthLayout>
        </DndContext>
    );
}
