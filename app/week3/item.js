// item component

import React from 'react';
import ItemList from './item-list';

export default function Item({name, quantity, category}) {
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>



        // <div>
        //     <ItemList></ItemList>
        // </div>
    );
}

