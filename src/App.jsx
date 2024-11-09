import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';

import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import User from './components/User.jsx';
import NotFound from './components/NotFound.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog.jsx';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        {/*  <Route path='/home' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='user/:id' element={<User />} />
        </Route> */}
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
