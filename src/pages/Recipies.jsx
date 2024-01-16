import { useEffect, useState } from "react";
import './pages.css';
import { useParams } from "react-router-dom";

import React from 'react'

function Recipies() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}?apiKey=b2f32a4cbe3248858c887ba940b36496&cuisine`);
        const details = await data.json();
        setDetails(details);
    };
    useEffect(() => {
        fetchDetails();
    }, [params.name]);
    return (
        <div>
            {details.title}
        </div>
    )
}

export default Recipies
