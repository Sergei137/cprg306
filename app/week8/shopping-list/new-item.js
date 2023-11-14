// new item component

"use client";
import { useState } from "react"

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    // handle submit function
    const handleSubmit = (event) => {
        event.preventDefault();

        // create item object
        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        onAddItem(item); // add new item to items

        // reset form fields
        setName("");
        setQuantity(1);
        setCategory("");
    }
    
    // form 
    // NOTE - browser console displays: `Warning: Each child in a list should have a unique "key" prop.` when a new item is added. This is expected because there is no new id being attributed to the new item.
    return(
        <form onSubmit={handleSubmit} className="border border-black max-w-md bg-white rounded-lg p-4 mb-4">
            <div className="mb-4">
                <label>Item Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)} 
                        required 
                        className="w-full border border-black rounded-md py-2 px-3"> 
                    </input>
                </label>
            </div>
            <div className="mb-4">
                <label>Quantity:
                    <input type="number" min="1" max="99" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} required
                    className="w-full border border-black rounded-md py-2 px-3"></input>
                </label>
            </div>
            <div className="mb-8">
                <label>Category:
                    <select value={category} onChange={(event) => setCategory(event.target.value)} required className="bg-white w-full border border-black rounded-md py-2 px-3">
                        <option value="" disabled hidden>Select a category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="bakery">Bakery</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="household">Household</option>
                    </select>
                </label>
            </div>
            <button 
                className="bg-blue-500 active:bg-blue-300 text-white font-bold py-2 px-3 rounded" 
                type="submit">Submit
            </button>
        </form>
    );
}
