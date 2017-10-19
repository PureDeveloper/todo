var todoList = {
  todos: [],
  displayTodos: function(){
    console.log(this.todos); 
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(idx, newVal){
    this.todos[idx].todoText = newVal;
    this.displayTodos();
  },
  deleteTodo: function(idx){
    this.todos.splice(idx, 1);
    this.displayTodos();
  },
  toggleCompleted: function(idx){
    var todo = this.todos[idx];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};