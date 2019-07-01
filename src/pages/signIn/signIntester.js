import React from 'react';
import { SignIn } from './SignIn';
import { createShallow } from '@material-ui/core/test-utils';
import { shallow } from 'enzyme'; 

describe('Tesing SignIn component', () => {
    /*
    it('should render SignIn component', () => {
        const shallowWrapper = shallow(<SignIn />)
        expect(shallowWrapper.exists()).toBe(true)
    })
    
     WE COULDN'T TEST <Input /> BECAUSE THEY ARE MATERIAL UI COMPONENTS. 
    MATERIAL UI HAS IT'S OWN TESTING METHODS: https://material-ui.com/guides/testing/
    it('should respond to change event and change the state of the Login Component', () => {
        const shallowWrapper = shallow(<SignIn />);
        shallowWrapper.find('Input').simulate('change', {
            target: {
                name: 'email',
                value: 'sergio4156@gmail.com'
            }
        })
        expect(shallowWrapper.state('email').toEqual('sergio4156@gmail.com'))
    })
    */
})