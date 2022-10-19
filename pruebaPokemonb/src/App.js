
import React from 'react';
import './App.css';
import Card from './components/Card';
import ContainerCard from './components/ContainerCard';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import Nav from './components/Nav';
import styled from 'styled-components';
import Details from './components/Details';
import Error from './components/Error';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Spinner } from './components/Spinner';
import Footer from './components/Footer';


function App() {

  const [text, settext] = useState('');


  function Contenido() {

    if (text=="") {
      return(<ContainerCard>
        </ContainerCard>)
    }
  }



  return (
    <Router>
      <div>
      <div className='App-header'>
        <Header></Header>

      </div>
      
      <Routes>
      <Route path="/details/:cardId" element={<Details/>} ></Route>
      <Route path="*" element={<Error/>} ></Route>
        <Route path="/" element={<Contenido/>} exact></Route>

        
      </Routes>
      

    </div>

    
      
    </Router>
    
    
  );
}



export default App;
