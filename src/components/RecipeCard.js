import React from 'react';
import axios from 'axios';
import { deleteRecipe } from '../services/recipeService';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { id, name, picture } = recipe;
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            try {
                await deleteRecipe(id);
                alert('Recipe deleted successfully!');
                window.location.reload();
            } catch (error) {
                console.error('Error deleting recipe:', error);
            }
        }
    };

    return (
        <div className="recipe-card">
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <button onClick={() => navigate(`/recipe/${id}`)}>Show More</button>
            <button onClick={() => navigate(`/edit-recipe/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default RecipeCard;
