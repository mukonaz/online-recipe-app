import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
// import ViewRecipe from './components/ViewRecipe';
import EditRecipe from './components/EditRecipe';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/add-recipe" element={<AddRecipe />} />
                {/* <Route path="/recipe/:id" element={<ViewRecipe />} /> */}
                <Route path="/edit-recipe/:id" element={<EditRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;
