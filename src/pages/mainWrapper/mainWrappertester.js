import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/NavBar';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import renderer from 'react-test-renderer';


describe('Testing mainWrapper components', () => {

    describe('Tesing <NavBar />', () => {
        /*
        it('testing not authenticated rendering', () => {
            let authenticated;
            const shallowWrapper = shallow(<NavBar />);
            if(authenticated = false) {
                expect(shallowWrapper.find('NavLink').text()).toEqual('Sign Up') && expect(shallowWrapper.find('NavLink').text()).toEqual('Sign In')
            } 
        })
        
        it('makes sure UI did not change', () => {
            const shallowWrapper = shallow(<NavBar />)
            const tree = renderer.create(shallowWrapper).toJSON();
            expect(tree).toMatchSnapshot();
        })
        
        it('testing authenticated rendering', () => {
            let authenticated;
            const shallowWrapper2 = shallow(<NavBar />);
            if(authenticated = true) {
                expect(shallowWrapper2.find('NavLink').text()).toEqual('About Me') && expect(shallowWrapper2.find('NavLink').text()).toEqual('Hobbies')
            } 
        })
        */
    })

    

})