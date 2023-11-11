// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import DiscussionBoard from './pages/DiscussionBoard';
import ResourceList from './pages/ResourceList';
import CreatePost from './pages/CreatePost';
import CreateResource from './pages/CreateResource';
import AboutUs from './pages/AboutUs'; // Import the new AboutUs component

import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<DiscussionBoard />} />
        <Route path="/resources" element={<ResourceList />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/add-resource" element={<CreateResource />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add this line for the About Us page */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
