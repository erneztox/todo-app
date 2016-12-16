import React, { Component } from 'react';
import uuid from 'node-uuid';
import TodoList from './components/todolist.js';
import TodoForm from './components/todoform.js';
import TodoSearch from './components/todosearch.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: []
    }
  }
  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  handletoggle = (id) => {
    let updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updateTodos
    })
   }

  render() {
    let {todos} = this.state;
    return (
      <div className="App">
        <h3>Todo App</h3>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handletoggle}/>
        <TodoForm addTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default App;
