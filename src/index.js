import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className = "overflow-y-scroll no-scrollbar">
    <App />
  </React.StrictMode>
);
