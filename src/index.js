import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
  </React.StrictMode>,
  document.getElementById('root')
);

