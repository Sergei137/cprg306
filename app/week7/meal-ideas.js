"use client";

import { useState, useEffect } from "react"

function mealIdeas({ ingredient }) {
    const [meals, setMeals] = useState("");

    async function loadMealIdeas ({ ingredient }){ // load meal ideas
        
    };

    useEffect(() => { // fetch data from api when ingredient changes by using useEffect hook
        fetchMealIdeas(ingredient, setMeals); // fetch data from api
    }, [ingredient]); // only run when ingredient changes

   loadMealIdeas();

    return (
        <div>
            <h1>Meal Ideas</h1>
                <ul>
                    <li></li>
                </ul>
        </div>
    );
}
export default mealIdeas;

// api fetching function 
async function fetchMealIdeas(ingredient, setMeals) {
    try {
        // fetch data from api
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json(); // convert response to json
        setMeals(data.meals); // set meals state to data (array of meal objects)
    } catch (error) {
        console.error("Error:", error);
        setMeals([]); // set meals state to empty array - DO I NEED THIS???
    }
}


