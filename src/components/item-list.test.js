import React from 'react';
import { shallow } from 'enzyme';

import ItemList from './item-list';

describe('ItemList', () => {

    it('displays a default message when there are no items', () => {
        const component = shallow(<ItemList />);

        expect(component.text()).toContain("Use the controls above to add tasks do your todo list.");
    });

    it('displays a list of items', () => {
        const myTodos = [
            { id: 1, completed: true, text: 'Aprender React' },
            { id: 2, completed: false, text: 'Aprender Redux' }
        ];
        const component = shallow(<ItemList items={ myTodos } />);

        expect(component.text()).toContain("Aprender React");
        expect(component.text()).toContain("Aprender Redux");
        expect(component.find('li').first().hasClass('completed')).toBe(true);
        expect(component.find('li').last().hasClass('completed')).toBe(false);
    });

});