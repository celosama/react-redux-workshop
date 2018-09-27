import React from 'react';
import { shallow } from 'enzyme';

import TodoApp from './todo-app';

it('renders the todo app', () => {
    const component = shallow(<TodoApp />);

    expect(component.text()).toContain("Todo List");
});