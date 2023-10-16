// new item component

"use client";
import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(""); // assignment said to set it as 1, empty string prevents redundancy of the required attribute.
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
        alert(`Name: ${name} Quantity: ${quantity} Category: ${category}`);

        // reset form fields
        setName("");
        setQuantity("");
        setCategory("");
    }
    
    // form 
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} required></input>
                </label>
            </div>
            <div>
                <label>Quantity
                    <input type="number" min="1" max="99" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} required></input>
                </label>
            </div>
            <div>
                <label>Category
                    <select value={category} onChange={(event) => setCategory(event.target.value)} required>
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
            <button type="submit">Submit</button>
        </form>
    );
}










