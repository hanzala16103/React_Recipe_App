import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipies from './Recipies';
import { Route, Routes } from "react-router-dom";
function Pages() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cuisine/:type' element={<Cuisine />} />
            <Route path='/Searched/:search' element={<Searched />} />
            <Route path='/recipe/:name' element={<Recipies />} />
        </Routes>

    )
}

export default Pages
