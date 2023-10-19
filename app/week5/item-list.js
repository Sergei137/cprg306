// Item list component

"use client";
import { useState } from "react"
import Item from './item'
import items from './items.json'

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    // sort items by name or category
    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {
            return 0;
        }
    });

    return (
        <div>
            {sortedItems.map((item) => (
                <Item id={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
            ))}
            
        </div>
    );
};
export default ItemList;

//<Item name={item1.name} quantity={item1.quantity} category={item1.category}></Item>

// let { a:b } 
// log(b)

// let cars = [
    //{m: "", b: ""}
    //{m: "", b: ""}
    //{m: "", b: ""}
//];

