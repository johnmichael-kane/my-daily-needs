import React from 'react';
import logo from './logo.svg';
import './App.css';

const Home: React.FC = () => {
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Create Resume and everything on this page
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        
    );
};

export default Home;