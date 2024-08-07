import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Landing from './components/Landing';

const App = () => {
    return (
       <div>
       <BrowserRouter>
         <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
};

export default App;

// import React from 'react'
// import Register from './components/Register'
// const App = () => {
//   return (
//     <div><Register /></div>
//   )
// }

// export default App
