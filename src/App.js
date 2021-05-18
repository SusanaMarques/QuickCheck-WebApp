import './CSS/App.css';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';
import { Component, useState, useEffect } from 'react';
const fs=require('fs')

function App() {


  var print=[<h1>Indx</h1>,<h3>+1</h3>,<h3>+1</h3>]
  console.log("________--------CLIENT-------_________")

  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">
          <a class="nav-link active" href="diseases">Diseases </a>
          <a class="nav-link active" href="precautions">Precautions</a>
        </div>

      </header>
      <div className="Name">
        <p>QuickCheck</p>
      </div>
      <div className="underName">
        <p>We recommend medical exams based on your symptoms</p>
      </div>
      {<h3>111</h3>};
      <button onClick={()=>fetch('/symptoms').then(res => res.json()).then(data => data.symptoms.forEach(e=><h4>2:{e}</h4>))} >ClickME</button>;
      
      <form method="POST" action="/predict">
      <label for="symptoms">Symptoms</label>
      <input type="text" id="symptoms" name="symptoms" multiple></input>
      <input type="text" id="symptoms" name="symptoms" multiple></input>
      <input type="submit" value="Submit"></input>
      </form>


    </div>

  );
}

export default App;
