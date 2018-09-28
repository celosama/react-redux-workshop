export const Actions = {
    ADD_TODO: 'ADD_TODO'
}

const todo = (state = [], action) => {
    if (!action) {
        return state;
    }
    
    switch(action.type) {
        case Actions.ADD_TODO: 
            return state.concat([{ text: action.text, completed: false }]);
        default:
            return state;
    }

    
}

export default todo;