import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import "./pages.css"

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b2f32a4cbe3248858c887ba940b36496&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);
    return (
        <div className='Grid'>
            {cuisine.map((item) => {
                return (
                    <div className='Card' key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h5>{item.title}</h5>
                    </div>
                );
            })}
        </div>
    )
}

export default Cuisine
