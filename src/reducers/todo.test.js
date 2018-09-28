import todo, { Actions } from './todo';

describe('todo', () => {

    it('returns the default state', () => {
        const state = todo();

        expect(state).toEqual([]);
    });

    it ('adds a todo item', () => {
        const state = todo([], { type: Actions.ADD_TODO, text: "Brush teeth" });

        const expectedState = [
            { text: "Brush teeth", completed: false }
        ]

        expect(state).toEqual(expectedState);
    });

});