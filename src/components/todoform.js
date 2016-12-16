import React, { Component } from 'react';

class TodoForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    let todo = this.refs.todo.value;
    if (todo !== ''){
      this.props.addTodo(todo);
      this.refs.todo.value = '';
    }
    this.refs.todo.focus();
    return;
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="add a todo" ref='todo'/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
