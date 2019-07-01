import React from 'react';
import { Route, Link } from 'react-router-dom';
import Todo from '../todo/Todo';

const Home = () => {
    return (
        <>
            <h1>Welcome to my site. Click <Link to='/home/todopage'>here</Link> to start TODO App</h1>
            <Route path='/home/todopage' component={Todo} />
        </>
        
    )
}

export default Home;