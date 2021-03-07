import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

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
