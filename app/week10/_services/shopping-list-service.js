import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// function to retrive items for a specific user
export async function getItems(userId) {
    
    // empty array to store retrieved items
    const items = [];
    
    // refrence to items sub collecion in users collection by spedified userId
    const itemsRef = collection(db, 'users', userId, 'items');

    // getDocs to asynchronously fetch dosuments from items sub collection.
    const itemsSnapshot = await getDocs(itemsRef);
  
    // iterate over each document in querySnapshot
    itemsSnapshot.forEach(doc => {
        // for each documant, push document id and data object into items array.
        items.push({
            id: doc.id,
            data: doc.data()
        });
    });
  
    // return array of items
    return items;
}

// function to add new items for a specific user
export async function addItem(userId, item) {

    // refrence to items sub collecion in users collection by spedified userId
    const itemsRef = collection(db, 'users', userId, 'items');

    // addDoc to asynchronously add a new document to items sub collection
    const docRef = await addDoc(itemsRef, item);

    // return document ID
    return docRef.id;
}









