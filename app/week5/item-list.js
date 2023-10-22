// Item list component

"use client";
import { useState } from "react"
import Item from './item'
import items from './items.json'

function ItemList() {
    const [sortBy, setSortBy] = useState('name');


    // sort items by category, then by name
    // const sortAll = (a, b) => {
    //     if (a.category === b.category) {
    //         return a.name.localeCompare(b.name);
    //     } else {
    //         return a.category.localeCompare(b.category);
    //     }
    // };


    // sort items by name or category
    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') { // sort by name
            return a.name.localeCompare(b.name); 
        } else if (sortBy === 'category') { // sort by category
            return a.category.localeCompare(b.category);
        } else if (sortBy === 'sortAll') {
            if (a.category === b.category) {
                return a.name.localeCompare(b.name);
            } else {
                return a.category.localeCompare(b.category);
            }
        } else {
            return 0;
        }
    });

    // sortBy set to 'name'
    const handleSortByName = () => {
        setSortBy('name');
    };

    // sortBy set to 'category'
    const handleSortByCategory = () => {
        setSortBy('category');
    };

    // sortBy set to 'sortAll'
    const handleSortAll = () => {
        setSortBy('sortAll');
    };



    return (
        <div>   
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByCategory}>Sort by Category</button>
            <button onClick={() => setSortBy('sortAll')}>Sort All</button>
            {/* <button onclick={handleSortAll}>Sort All</button> */}
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

