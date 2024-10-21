import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../services/recipeService';
import axios from 'axios';

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servings, setServings] = useState('');
    const [picture, setPicture] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRecipe = {
            name,
            ingredients: ingredients.split(',').map(item => item.trim()),
            instructions,
            category,
            prepTime,
            cookTime,
            servings,
            picture,
        };

        try {
            await addRecipe(newRecipe);
            alert('Recipe added successfully!');
            navigate('/home');
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <div className="add-recipe">
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                <input type="text" placeholder="Category (e.g., Dessert, Main Course)" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="text" placeholder="Preparation Time (e.g., 30 mins)" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} required />
                <input type="text" placeholder="Cooking Time (e.g., 1 hour)" value={cookTime} onChange={(e) => setCookTime(e.target.value)} required />
                <input type="number" placeholder="Servings" value={servings} onChange={(e) => setServings(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={picture} onChange={(e) => setPicture(e.target.value)} required />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
