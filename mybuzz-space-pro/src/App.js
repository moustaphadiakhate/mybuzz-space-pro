import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../src/component/layouts/Navbar';
import SeConnecter from './component/auth/SeConnecter';
import SeInscrire from './component/auth/SeInscrire';
import BuzzDetail from './component/buzz/BuzzDetail';
import Dashboard from './component/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/Seconnecter' component={SeConnecter} />
        <Route exact path='/SeInscrire' component={SeInscrire} />
        <Route path='/buzz/:id' component={BuzzDetail} />


        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
