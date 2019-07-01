import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAll } from '../../store/actions/todo/todoActions';

class ToDoFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    /*
    componentDidMount() {
        console.log('this.props.todoTasks from componentDidMount', this.props.todoTasks);
    }

    componentDidUpdate() {
        console.log('this.props.todoTasks from componentDidUpdate', this.props.todoTasks);
    }
    */
    
    render() {
        return (
            <>
                <footer className="todo-footer">
                    {this.props.todoTasks.length >= 1 ? (
                        <>
                            <label>Select All</label>
                            {/*WE CREATED A ref FOR THIS CHECKBOX SO I CAN PASS THIS DOM NODE AS AN ARG TO checkAll(refName)*/}
                            <input ref={input => this.checkAll = input} type='checkbox' onClick={() => this.props.checkAll(this.checkAll)} /> 
                        </>
                    ) : ( 
                        "No Tasks at the moment"
                    )}
                </footer>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoTasks: state.todo.todoTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAll: (refName) => dispatch(checkAll(refName)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoFooter);