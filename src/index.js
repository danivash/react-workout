import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/general/header/Header';
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/> 
  </React.StrictMode>
);


