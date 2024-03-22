import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Insert from './Component/Insert';
import View from './Component/View';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
       
            <Routes>
                <Route path='/' element={
                  <Home/>
                }/>
                <Route path='/insert' element={
                    <Insert/>
                }/>
                <Route path='/view' element={
                    <View/>
                }/>
            </Routes>
        </BrowserRouter>
        </React.Fragment>
  );
}

export default App;
