import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'; 
import App from './App';
import Diseases from './Diseases';
import Precautions from './Precautions';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/diseases" component={Diseases} />
      <Route path="/precautions" component={Precautions} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



reportWebVitals();
