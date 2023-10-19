// item component

// render item list component
export default function Item({name, quantity, category}) {
    return (
        <div className="border border-black bg-white rounded-md p-4 mb-4">
            <ul>
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>
    );
}
