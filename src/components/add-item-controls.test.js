import React from 'react';
import { shallow } from 'enzyme';

import AddItemControls from './add-item-controls'

describe('AddItemControls', () => {
    it('renders the input', () => {
        const component = shallow(<AddItemControls />);

        expect(component.find('input').exists()).toEqual(true);
    });

    it('renders the add item button', () => {
        const component = shallow(<AddItemControls />);

        expect(component.find('button').exists()).toEqual(true);
    });
});