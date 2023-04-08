import React from 'react';

import Home from './routes/Home';

import { Routes, Route } from 'react-router-dom';
import Project from './routes/Project';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
