import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CartItem from './CartItem';

export function SortableItem({ id, name, price, description, image, quantity, onRemove }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        pointerEvents: isDragging ? 'none' : 'auto', // Disable pointer events while dragging
    };

    return (
        <div ref={setNodeRef} style={style} className="flex flex-col gap-3">
            <CartItem
                id={id}
                name={name}
                price={price}
                description={description}
                image={image}
                initialQuantity={quantity}
                onRemove={onRemove}
                listeners={listeners} // Pass listeners to CartItem
            />
        </div>
    );
}
