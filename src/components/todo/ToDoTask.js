import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReducerTask } from '../../store/actions/todo/todoActions';

class ToDoTask extends Component {
    
    state = {
        checked: false,
        task: '',
        edit: null
    }

    /*
    componentDidMount() {
        console.log('ToDoTask props', this.props);
    }
    */

    handleChecked = () => {
        this.setState({
            checked: !this.state.checked // 1 exclamtion (!) reverses boolean to opposite
        })
        console.log('this.state.checked', this.state.checked);
    }
    
    deleteTask = (id) => {
        let tasks = this.props.tasks.filter(task => {
            return id !== task.id;
        })
        console.log('ToDoTask.js tasks after filter', tasks)
        this.props.deleteReducerTask(tasks);
    }

    handleInput = (e) => {
        if(e.currentTarget.blur()) {
            console.log('span value was changed');
        }
        
    }

    handleEdit = () => {
        this.setState({
            edit : true
        })
    }

    render() {

        //console.log('ToDoTask local state task', this.state.task);
        const { checkAll, task } = this.props;

        return (
            <>
                {checkAll && !this.state.checked ? (
                        <>
                            <div className='todo-task'>
                                <input onChange={this.handleChecked} type='checkbox' checked />
                                {/* notice how we swap classes via ternary conditional check */}
                                <span 
                                    name='task'
                                    className='checked' 
                                    contentEditable={true}
                                    value={this.state.task}
                                >{task}
                                </span>
                                <button className="todo-task-editBtn" onClick={this.handleEdit}>Edit</button>
                                <div onClick={() => this.deleteTask(this.props.id)}>&#x2715;</div>
                            </div>
                            <hr />
                        </>
                    ) : (
                        <>
                            <div className='todo-task'>
                                <input onChange={this.handleChecked} type='checkbox' />
                                {/* notice how we swap classes via ternary conditional check */}
                                {this.state.edit ? 
                                    (
                                        <input type="text" />
                                    ) : (
                                        <span
                                            name='task' 
                                            className={this.state.checked ? "checked" : "none"} 
                                            contentEditable={true}
                                            value={this.state.task}
                                        >{this.props.task}
                                        </span>
                                    )
                                }
                                
                                <button className="todo-task-editBtn" onClick={this.handleEdit}>Edit</button>
                                <div className='delete-task' onClick={() => this.deleteTask(this.props.id)}>&#x2715;</div>
                            </div>
                            <hr />
                        </>
                    )
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todo.todoTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteReducerTask: (todoObj) => dispatch(deleteReducerTask(todoObj))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask);