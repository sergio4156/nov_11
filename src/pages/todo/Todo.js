import React, { Component } from 'react';
import ToDoHeader from '../../components/todo/ToDoHeader';
import ToDoBody from '../../components/todo/ToDoBody';

class Todo extends Component {

    state = {

    }

    render() {
        return (
            <section className='todo-container'>
                <ToDoHeader />
                <ToDoBody />
            </section>
        )
    }
}

export default Todo;