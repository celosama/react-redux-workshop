import React, { Component } from 'react';
import './todo-app.css';
import AddItemControls from './add-item-controls';

class TodoApp extends Component {
    render() {
        return(
            <div className="app-defaults">
                <h2>Todo List</h2>
                <AddItemControls />
            </div>
        );
    }
}

export default TodoApp;