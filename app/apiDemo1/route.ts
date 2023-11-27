/*
export async function GET() {
    return new Response('Hello World');
}

const response = await fetch('/api/demo1');
*/

// INSTALLS: npm install zod
// import { z } from "zod";

// fetch list of users
export async function GET() {
    // fetch users from database
    // const users = await db.query("SELECT * FROM users");
    const users: User[] = [
        { id: 1, name: "Abe", age: 30 },
        { id: 2, name: "Bob", age: 20 },
    ];
   
    console.log(`fetch users`);
    return new Response(JSON.stringify(User[0]), { status: 200 });
}

