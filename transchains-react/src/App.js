import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import StartPage from './pages/Start';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/start" component={StartPage} />
        </div>
      </BrowserRouter>)
  };
}

export default App;
