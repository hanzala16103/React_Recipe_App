import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './styles.css';
import { Link } from "react-router-dom";


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check));
        } else {
            try {
                const response = await fetch(
                    "https://api.spoonacular.com/recipes/random?apiKey=b2f32a4cbe3248858c887ba940b36496&number=15"
                );
                const data = await response.json();
                console.log(data);
                localStorage.setItem("popular", JSON.stringify(data.recipes));
                setPopular(data.recipes || []); // Assuming recipes is the correct property in the Spoonacular API response
            } catch (error) {
                console.error(error);
            }

        }

    };

    return (
        <div>
            <div className="Wrapper">
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: '5rem'
                }}>
                    {popular.map((recipe) => (
                        <SplideSlide key={recipe.id}>
                            <div className="Card">
                                <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Link>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default Popular;
