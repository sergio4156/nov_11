/*
REASON FOR IMPORTING REACT: need to import React. It's required when you're using JSX 
even when not using it explicitly.
*/
import React from 'react'; 
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<App /> Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('IndexWrapper').length).toEqual(1);
    })
    it('checks that component exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    })
});