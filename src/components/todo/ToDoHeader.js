import React from 'react';
import HeaderInput from './HeaderInput';


const ToDoHeader = () => {
    return (
        <>
            <h3 className='todo-container-header'>Enter Task</h3>
            <hr />
            <HeaderInput />
        </>
    )
}

export default ToDoHeader;