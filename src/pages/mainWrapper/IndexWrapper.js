import React from 'react';
import NavBar from '../../components/NavBar';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../signIn/SignIn';
import LandingPage from '../landing/LandingPage';
import Home from '../home/Home';
import PageNotFound from '../pageNotFound/PageNotFound';

const IndexWrapper = () => {
    return (
        <>
            <Route component={NavBar} />
            <Route path='/' exact component={LandingPage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/home' component={Home} />
        </>
    )
}

export default IndexWrapper;