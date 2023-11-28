"use client";

import { useState, useEffect } from "react"

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // async function to load meal ideas
    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data);
        } catch (error) {
            console.error(error);
        }
    };

    // fetch data from api when ingredient changes by using useEffect hook
    useEffect(() => { 
        loadMealIdeas();
    }, [ingredient]);

    // checks if meals array is empty or returns meal ideas
    if (meals.length === 0) {
        return <div>No meal ideas for {ingredient}</div>;
    } else {
        return (
            <div  className="border border-black bg-white p-4 mb-4">
                <h2 className="text-4xl mb-4">Meal Ideas</h2>
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="mb-8 text-2xl">
                            {meal.strMeal}
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default MealIdeas;

// api fetching function 
async function fetchMealIdeas(ingredient) {
    try {
        // fetch data from api
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const mealData = await response.json(); // wait for response to be converted to json
        return mealData.meals || []; // return meals array

    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}


