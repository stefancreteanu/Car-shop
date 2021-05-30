import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Cars from './components/Cars'
import Cart from './components/Cart'
import AddCarForm from './components/AddCarForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path='/cars' component={Cars}/>
            <Route exact path='/add-car' component={AddCarForm}/>
            <Route exact path='/cart' component={Cart}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
