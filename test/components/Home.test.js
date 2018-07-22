import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../../src/components/signup/Home';

it('renders home page text without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('render home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});
