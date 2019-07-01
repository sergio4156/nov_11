const initState = {
    formValidated: false,
    authenticated: false
}

const signInReducer = (state=initState, action) => {
    switch(action.type) {
        case 'SUCCESSFULLY_VALIDATED_FORM' :
            return {
                ...state,
                formValidated: action.formValidated
            }
        case 'SUCCESSFULL_AUTHENTICATION' :
            return {
                ...state,
                authenticated: action.authenticated
            }
        default:
            return state
    }
}

export default signInReducer;