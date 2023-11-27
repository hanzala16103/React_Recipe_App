import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './styles.css';

function Veggie() {
    const [veggie, setveggie] = useState([]);

    useEffect(() => {
        getveggie();
    }, []);

    const getveggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setveggie(JSON.parse(check));
        } else {
            try {
                const response = await fetch(
                    "https://api.spoonacular.com/recipes/random?apiKey=b2f32a4cbe3248858c887ba940b36496&number=15&tags=vegetarian"
                );
                const data = await response.json();
                console.log(data);
                localStorage.setItem("veggie", JSON.stringify(data.recipes));
                setveggie(data.recipes || []); // Assuming recipes is the correct property in the Spoonacular API response
            } catch (error) {
                console.error(error);
            }

        }

    };
    return (
        <div>
            <div className="Wrapper">
                <h3>Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: '5rem'
                }}>
                    {veggie.map((recipe) => (
                        <SplideSlide key={recipe.id}>
                            <div className="Card">
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default Veggie
