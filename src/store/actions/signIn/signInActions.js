export const validateForm = (email, password) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            let emailError = '';
            let passwordError = '';
            if(!email.includes('@')) {
            emailError = 'please enter valid email';
            }
            if(password.length < 5) {
            passwordError = 'password must be at least 5 chars long';
            }
            if(emailError || passwordError) {
                reject({ emailError, passwordError })
            } else {
                resolve(dispatch({
                        type: 'SUCCESSFULLY_VALIDATED_FORM',
                        formValidated: true
                    })
                );
            }
        })
    }
}

/* This action creator only does api call. Does not dispatch anything to store */
export const signInApiCallToAuth = () => {
    return (dispatch, getState) => {
        console.log('testing non mock signInApiCallToAuth')
        return fetch('http://localhost:4000/authUsers')
            .then(res => res.json())
    }
}

export const checkIfUserExists = (apiAuthUsersData, email, pw, props) => {
    return (dispatch, getState) => {
        apiAuthUsersData.forEach(obj => {
            if(obj.email === email && obj.password === pw) {
                dispatch({
                    type: 'SUCCESSFULL_AUTHENTICATION',
                    authenticated: true
                })
                props.history.push('/home');
                console.log('Authenticated user!')
            } else {
                console.log('Not an authenticated user!')
            }
        })
        //console.log('testing', getState())
    }
}