var todosObj = {
  todos: ['task 1', 'task 2', 'task 3'],
  displayTodos: function(){
    console.log(this.todos); 
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(idx, newVal){
    this.todos[idx] = newVal;
    this.displayTodos();
  },
  deleteTodo: function(idx){
    this.todos.splice(idx, 1);
    this.displayTodos();
  }
};