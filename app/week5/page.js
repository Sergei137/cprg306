// week5 page 

import ItemList from './item-list';

// display shopping list 
export default function Page() {
    return(
        <main className="bg-red-300 p-10">
            <h1 className="text-center text-4xl font-bold border border-black bg-white rounded-md p-4 mb-4">My Shopping List</h1>
            <br></br>
            <div>
                <ItemList></ItemList>    
            </div>
        </main>
    );
}
