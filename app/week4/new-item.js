"use strict";
import { useState } from "react"

function NameFunction() {
    const [name, setName] = useState("");
}

function QuantityFunction() {
    const [quantity, setQuantity] = useState(1);
}

function CategoryFunction() {
    const [category, setCategory] = useState("produce");
}

function handleSubmit(event) {
    event.preventDefault();
}

// test code
const incremetQuantity = () => {
    setQuantity(quantity + 1);
}






