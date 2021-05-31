import './CSS/App.css';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';
import { Component, useState, useEffect } from 'react';
import svg1 from './images/1.svg'
import svg2 from './images/2.svg'
import SymptomPicker from "./SymptomPicker copy"
const fs=require('fs')


function App() {


  var print=[<h1>Indx</h1>,<h3>+1</h3>,<h3>+1</h3>]
  console.log("________--------CLIENT-------_________")

  
  return (
    
    <div className="App">
      <img src={svg1} className="svg1" />
      <div className="Name">
        <p>QuickCheck</p>
      </div>

      <div className="underName">
        <p>We recommend medical exams based on symptoms</p>
      </div>

      <SymptomPicker/>
      <img src={svg2} className="svg2" />


    </div>

  );
}

export default App;
