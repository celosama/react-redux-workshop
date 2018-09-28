import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../reducers/todo';

export class AddItemControls extends Component {
    constructor(props) {
        super(props);
        this.input = { value: "" }
    }

    addTodo(input) {
        return {
            type: Actions.ADD_TODO,
            text: input
        }
    }

    render() {
        const { dispatch } = this.props;
        let text;

        return (
            <div>
                <input ref={ input => text = input } type="text" id="item" name="item" placeholder="Type your todo item here" />
                <button onClick={ () => { dispatch(this.addTodo(text.value)) } }>Add Item</button>
            </div>
        );
    }
}

export default connect()(AddItemControls);