var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('Todos are empty!');
    } else {
      for(var i = 0; i < this.todos.length; i++){
        var todo = this.todos[i];
        var completed = todo.completed ? '[x]' : '[ ]';
        console.log(completed, todo.todoText);
      }
    }
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
  },
  toggleAllCompleted: function(){
    var totalTodos = this.todos.length;
    var numCompleted = 0;
    
    for(var k = 0; k < totalTodos; k++){
      if(this.todos[k].completed){
        numCompleted++;
      }
    }
    if (numCompleted === totalTodos) {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      for(var j = 0; j < totalTodos; j++){
        this.todos[j].completed = true;
      }
    }
    this.displayTodos();
  }
};