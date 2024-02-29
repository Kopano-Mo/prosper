import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="weather-app">
  <h1> Weather App</h1>
    <Weather/>
    <footer>
    <p>
      This project was coded by
      <a href="https://github.com/Kopano-Mo" target="_blank" rel="noreferrer" >kopano molapo</a> and is
      <a href="https://github.com/Kopano-Mo/sunshine" target="_blank"rel="noreferrer"> on GitHub</a> and
      <a href="https://sunshine-project.netlify.app" target="_blank"rel="noreferrer">hosted on Netlify</a>
    </p>
  </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
