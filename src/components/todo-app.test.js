import React from 'react';
import { shallow } from 'enzyme';
import AddItemControls from './add-item-controls';
import ItemList from './item-list';

import TodoApp from './todo-app';

describe('TodoApp', () => {

    it('renders the todo app with the title', () => {
        const component = shallow(<TodoApp />);
    
        expect(component.text()).toContain("Todo List");
    });
    
    it('renders the add item controls', () => {
        const component = shallow(<TodoApp />);
    
        expect(component.contains(<AddItemControls />)).toEqual(true);
    });

    it('renders the item list', () => {
        const component = shallow(<TodoApp />);
    
        expect(component.contains(<ItemList />)).toEqual(true);
    });

});
