import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchRecipes } from '../services/recipeService';
import RecipeCard from './RecipeCard';
import './Home.css'

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const data = await fetchRecipes();
                setRecipes(data);
            } catch (error) {
                console.error(error);
            }
        };

        getRecipes();
    }, []);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddRecipe = () => {
        navigate('/add-recipe');
    };

    return (
        <div className="home">
            <header>
                <h2>Welcome to the Recipe App</h2>
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={handleAddRecipe}>Add New Recipe</button>
            </header>
            <h2>Recipe List</h2>
            <div className="recipe-list">
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;
