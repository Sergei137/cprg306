// week5 page 
"use client";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import mealIdeas from './meal-ideas';
import { useState } from 'react';

// display shopping list 
function Page() {
    const [items, setItems] = useState(itemsData); // set items to itemsData

    const handleAddItem = (newItem) => { 
        setItems(prevItems => [...prevItems, newItem]); // add new item to items
    };

    return(
        <main className="bg-red-300 p-10">
            {/* <h1 className="text-center text-4xl font-bold border border-black bg-white rounded-md p-4 mb-4">My Shopping List</h1> */}
            <br></br>
            {/* <div>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div> */}
            <div>
                <mealIdeas ingredients="chicken"/>
            </div>
        </main>
    );
}
export default Page;

