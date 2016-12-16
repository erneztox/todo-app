

module.export = {
  setTodo: (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  getTodo: () => {
    let stringTodos = () => {localStorage.getItem('todos')};
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e){

    }
  }
}
