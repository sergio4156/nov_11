const initState = {
    todoTasks: [],
    checkAll: false
};

const todoReducer = (state=initState, action) => {
    switch(action.type) {
        case 'TODO_TASK' :
            return {
                ...state,
                //spread operator to not mutate state everytime we add new obj to todoTasks arr
                todoTasks: [ ...state.todoTasks, { task: action.task, id: action.id } ]
            }
        case 'DELETE_USER' :
            return {
                ...state,
                todoTasks : action.tasks
            }
        case 'CHECK_ALL' : 
            return {
                ...state,
                checkAll : action.checkAll
            }
        default :
            return state
    }   
}

export default todoReducer;