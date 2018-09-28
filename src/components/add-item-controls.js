import React, { Component } from 'react';

class AddItemControls extends Component {
    render() {
        return (
            <div>
                <input type="text" id="item" name="item" placeholder="Type your todo item here" />
                <button>Add Item</button>
            </div>
        );
    }
}

export default AddItemControls;