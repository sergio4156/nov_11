export const addTodo = (todoObj) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'TODO_TASK',
            task: todoObj.task,
            id: todoObj.id
        });
    }
}

export const deleteReducerTask = (tasks) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_USER',
            tasks : tasks
        });
        console.log('deleteReducerTask', getState());
    }
}

export const checkAll = (checkAllRef) => {
    return (dispatch, getState) => {
        if(checkAllRef.checked) {
            dispatch({
                type: 'CHECK_ALL',
                checkAll: true
            });
        } else {
            dispatch({
                type: 'CHECK_ALL',
                checkAll: false
            });
        }

        console.log('from checkAll', getState());
    }
}