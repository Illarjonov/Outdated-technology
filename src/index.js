import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Router } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Router>
      <App />
    </Router>
    </BrowserRouter>
 ,document.getElementById('root'));
registerServiceWorker();
