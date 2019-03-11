import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import CheersApp from './apps/cheers';
import TPSApp from './apps/tps';

import CheersStore from './apps/cheers/store';
import login from './apps/cheers/actions/login';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <button onClick={() => {
          CheersStore.dispatch(login({
            email: "hellpo@itsme.com",
          }))
        }} >Log in</button> 
        <BrowserRouter >
          <>
            <CheersApp />
            <TPSApp />
          </>
        </BrowserRouter >
      </div>
    );
  }
}

export default App;
