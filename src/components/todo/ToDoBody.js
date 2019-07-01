import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoTask from './ToDoTask';
import ToDoFooter from './ToDoFooter';

class ToDoBody extends Component {

    constructor(props) {
        super(props);
    }

    /*
    componentDidMount() {
        console.log('this.props.checkAll ToDoBody componentDidMount', this.props.checkAll);
    }

    componentDidUpdate() {
        console.log('this.props.checkAll ToDoBody componentDidUpdate', this.props.checkAll);
    }
    */

    render() {
        return (
            <>
                {this.props.todoTasks && this.props.todoTasks.map(todoObj => (
                    <ToDoTask 
                        key={todoObj.task} 
                        task={todoObj.task} 
                        id={todoObj.id} 
                        checkAll={this.props.checkAll}
                    />
                ))}
                <ToDoFooter />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoTasks: state.todo.todoTasks,
        checkAll: state.todo.checkAll
    }
}

export default connect(mapStateToProps)(ToDoBody);