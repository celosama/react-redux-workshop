import todo from './todo';

describe('todo', () => {

    it('returns the default state', () => {
        const state = todo();

        expect(state).toEqual({});
    })

});