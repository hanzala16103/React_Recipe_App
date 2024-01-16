import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submtHandler = (e) => {
        e.preventDefault();
        navigate('/Searched/' + input)

    };
    return (
        <form className='Fromstyle' onSubmit={submtHandler}>
            <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
        </form>
    )
}

export default Search
