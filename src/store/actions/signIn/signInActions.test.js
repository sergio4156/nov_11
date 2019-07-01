import { validateForm, signInApiCallToAuth, checkIfUserExists } from '../signIn/signInActions';

describe('testing validateForm function', () => {
    it("should reject invalid email entry", async () => {
        let email = 'blagmail.com';
        let password = '12';
        const dispatch = jest.fn();
        const getState = jest.fn();
        await validateForm(email, password)(dispatch, getState);
        return expect(validateForm()).rejects.toEqual({
            emailError: "please enter valid email",
            passwordError: "password must be at least 5 chars long"
        });
        /*
        return validateForm().catch(e => expect(e).toMatchObject({
            "emailError": "",
            "passwordError": "password must be at least 5 chars long"
        }));
        */
    })
    it('should pass email and password checks', async () => {
        let email = 'bla@bla.com';
        let password = '123454';
        let dispatch = jest.fn();
        let getState = jest.fn();
        await validateForm(email, password)(dispatch, getState);
        expect(dispatch).toBeCalledWith({"formValidated": true, "type": "SUCCESSFULLY_VALIDATED_FORM"})
    })
})
/*
THIS TEST IS UNNECESSARY BECAUSE WE ARE TESTING FUNCTIONALITY OF fetch() AND VALIDITY OF API. NOT THINGS WE
SHOULD BE TESTING. DOING SO JUST FOR THE HECK OF IT.
*/
describe('testing signInApiCallToAuth function', () => {
    it('should return data from fetch call', () => {
        let res = [
            {
              "id": 1,
              "email": "sergio4156@gmail.com",
              "password": "12345"
            },
            {
              "id": 2,
              "email": "andrew@gmail.com",
              "password": "67890"
            },
            {
              "id": 3,
              "email": "jessica@gmail.com",
              "password": "abcde"
            }
        ]
        //Mock functions
        let dispatch = jest.fn();
        let getState = jest.fn();
        signInApiCallToAuth()(dispatch, getState)
        fetch('http://localhost:4000/authUsers').then(data => {
           expect(data).toEqual(res)
       })
    })
})

describe('testing checkIfUserExists function', () => {
    it('should dispatch SUCCESSFULL_AUTHENTICATION const', () => {
        let apiAuthUsersData = [
            {
                "id": 1,
                "email": "sergio4156@gmail.com",
                "password": "12345"
            }
        ]
        let email = 'sergio4156@gmail.com';
        let pw = '12345';

        //props.history.push('/home');
        const propsMock = { 
            'history' : { 'push' : jest.fn( () => '/home' ) } 
        }

        let dispatch = jest.fn();
        let getState = jest.fn();
        checkIfUserExists(apiAuthUsersData, email, pw, propsMock)(dispatch, getState)
        expect(dispatch).toBeCalledWith({
            type: 'SUCCESSFULL_AUTHENTICATION',
            authenticated: true
        })
    })
})