import api from './axios';

// Fetch all recipes
export const fetchRecipes = async () => {
    try {
        const response = await api.get('/recipes');
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

// Add a new recipe (Create)
export const addRecipe = async (recipeData) => {
    try {
        const response = await api.post('/recipes', recipeData);
        return response.data;
    } catch (error) {
        console.error('Error adding recipe:', error);
        throw error;
    }
};

// Update a recipe (Update)
export const updateRecipe = async (id, updatedRecipe) => {
    try {
        const response = await api.put(`/recipes/${id}`, updatedRecipe);
        return response.data;
    } catch (error) {
        console.error('Error updating recipe:', error);
        throw error;
    }
};

// Delete a recipe (Delete)
export const deleteRecipe = async (id) => {
    try {
        await api.delete(`/recipes/${id}`);
    } catch (error) {
        console.error('Error deleting recipe:', error);
        throw error;
    }
};
