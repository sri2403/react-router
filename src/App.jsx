import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Home from '../components/Home';
import NewPost from '../components/NewPost';
import About from '../components/About';
import Missing from '../components/Missing';
import Footer from '../components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from '../context/Context1';



const App = () => {
    
    return (
        <div>
            <DataProvider>
             <Header title="EDU-Chart"/>
             <Nav />
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="post" element={<NewPost />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Missing />} />
             </Routes>
             <Footer />
            </DataProvider>
        </div>
    );
};

export default App;