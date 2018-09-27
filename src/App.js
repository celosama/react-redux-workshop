import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './Store'
import TodoApp from './components/todo-app';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
