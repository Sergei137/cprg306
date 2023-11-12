// Item list component

"use client";
import { useState } from "react"
import Item from './item'

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('category');

    // sort items by category, then by name
    const sortCategory = (a, b) => {
        if (a.category === b.category) {
            return a.name.localeCompare(b.name);
        } else {
            return a.category.localeCompare(b.category);
        }
    };

    // sort items by name or category
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') { // sort by name
            return a.name.localeCompare(b.name); 
        } else if (sortBy === 'category') { // sort by category
            return sortCategory(a, b);
        } else {
            return 0;
        }
    });

    return (
        <div>
            <div className="flex justify-center mt-8 mb-8">
                <button onClick={() => setSortBy('name')} className="bg-blue-500 active:bg-blue-300 text-white font-bold py-2 px-3 rounded mr-4">Sort by Name</button>
                <button onClick={() => setSortBy('category')} className="bg-blue-500 active:bg-blue-300 text-white font-bold py-2 px-3 rounded">Sort by Category</button>
            </div>
            {sortedItems.map((item) => (
                <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
            ))}
        </div>
    );
};
