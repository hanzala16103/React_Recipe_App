import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './pages.css';
function Searched() {
    const [searchedRecipe, setSearchedRecipe] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b2f32a4cbe3248858c887ba940b36496&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipe(recipes.results);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <div className='Grid'>
            {searchedRecipe.map((item) => {
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

export default Searched
