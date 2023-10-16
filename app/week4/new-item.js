// new item component

"use client";
import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState(""); // assignment said to set it as "produce", empty sting and form displaying "Select a category" prevents redundancy of the required attribute.

    // handle submit function
    const handleSubmit = (event) => {
        event.preventDefault();

        // create item object
        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        // log submitted data in console
        console.log(item);  
        
        // display alert of submitted data
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        // reset form fields
        setName("");
        setQuantity(1);
        setCategory("");
    }
    
    // form 
    return(
        <form onSubmit={handleSubmit} className="mx-auto max-w-md bg-white p-4">
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
            <div className="mb-10">
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
