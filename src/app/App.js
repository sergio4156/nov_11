import React, { Component } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/signIn/SignIn';
import LandingPage from '../pages/landing/LandingPage';
import Home from '../pages/home/Home';
import Modal from '../pages/modal/Modal';
import PageNotFound from '../pages/pageNotFound/PageNotFound';

class App extends Component {
  render() {
    return (
      <>
        <Route component={NavBar} />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/home' component={Home} />
          <Route path='/modal' component={Modal} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
