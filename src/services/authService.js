import api from './axios';

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Login user
export const loginUser = async (username, password) => {
    try {
        const response = await api.get(`/users?username=${username}&password=${password}`);
        if (response.data.length) {
            return response.data[0];
        } else {
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Save logged-in user data
export const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

// Get logged-in user data
export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'));
};

// Logout user
export const logoutUser = () => {
    localStorage.removeItem('user');
};
