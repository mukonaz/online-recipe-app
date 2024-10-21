import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRecipe } from '../services/recipeService';
import axios from 'axios';

const EditRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/recipes/${id}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateRecipe(id, recipe);
            alert('Recipe updated successfully!');
            navigate('/home');
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="edit-recipe">
            <h2>Edit Recipe</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
                <input type="text" name="ingredients" value={recipe.ingredients.join(', ')} onChange={handleChange} required />
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required></textarea>
                <input type="text" name="category" value={recipe.category} onChange={handleChange} required />
                <input type="text" name="prepTime" value={recipe.prepTime} onChange={handleChange} required />
                <input type="text" name="cookTime" value={recipe.cookTime} onChange={handleChange} required />
                <input type="number" name="servings" value={recipe.servings} onChange={handleChange} required />
                <input type="text" name="picture" value={recipe.picture} onChange={handleChange} required />
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
};

export default EditRecipe;
