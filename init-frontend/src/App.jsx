import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register'; // Import the Register component
import Login from './components/Login';
import Home from './components/Home';
import SignIn from './components/SignIn';
import ProfileHome from './components/profile/ProfileHome';
import MainComponent from './components/profile/ProfileHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/login" element={<SignIn />} />  {/* Login route */}
        <Route path="/home" element={<Home />} />  {/* Home route */}
        {/* <Route path="/profile" element={<ProfileHome />} /> Fixed path for profile */}
        <Route path="/profile" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
