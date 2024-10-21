import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Make sure this matches the port your JSON server is running on
});

export default api;
