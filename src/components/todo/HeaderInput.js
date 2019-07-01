import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todo/todoActions';


class HeaderInput extends Component {

    state = {
        task: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({
            task: this.state.task,
            id: Math.random()
        });
        e.target.reset(); // this clears the form after submiting
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    Task <input name='task' type='text' autoFocus="true" onChange={this.handleOnChange} />
                    <button>submit</button>
                </form>
                <hr />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (task) => dispatch(addTodo(task))
    }
}

export default connect(null, mapDispatchToProps)(HeaderInput);