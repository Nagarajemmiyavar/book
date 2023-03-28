import React from 'react';
import {Routes ,Route } from 'react-router-dom';
import Navabar from './Navabar';
import Flights from './Flights';
import Book from './Book';
import Home from './Home';
import './App.css';
import './Book.css';


function App() {
  return (
    
    <div className='nagaraj4'>
       <h1 style={{textAlign:"center"}}>NAGARAJ TRAVELLERS </h1>
       <Navabar/>
       
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/plane" element={<Flights/>}></Route>
      <Route path="/booking" element={<Book/>}></Route>
      </Routes>
    

    </div>

    
  )
}

export default App;
