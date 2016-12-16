import React, { Component } from 'react';
import Todo from './todo.js';

class TodoList extends Component {
  renderTodos = () => {
    let {todos} = this.props;
    return todos.map((todo) => {
      return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
    });
  }
  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }
}

export default TodoList;
