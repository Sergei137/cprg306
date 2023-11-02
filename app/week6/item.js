// item component

// render item list component
function Item({id, name, quantity, category}) {
    return (
        <div className="border border-black bg-white p-4 mb-4">
            <ul>
                <li key={`${id}-name`}>Name: {name}</li>
                <li key={`${id}-quantity`}>Quantity: {quantity}</li>
                <li key={`${id}-category`}>Category: {category}</li>
            </ul>
        </div>
    );
}
export default Item;

