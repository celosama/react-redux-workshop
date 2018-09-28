import React, { Component } from 'react';
import './todo-app.css';
import AddItemControls from './add-item-controls';
import ItemList from './item-list';

class TodoApp extends Component {
    render() {
        return(
            <div className="app-defaults">
                <h2>Todo List</h2>
                <AddItemControls />
                <ItemList />
            </div>
        );
    }
}

export default TodoApp;