var todoList = {
  todos: [],
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(idx, newVal){
    this.todos[idx].todoText = newVal;
    view.displayTodos();
  },
  deleteTodo: function(idx){
    this.todos.splice(idx, 1);
  },
  toggleCompleted: function(idx){
    var todo = this.todos[idx];
    todo.completed = !todo.completed;
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
  }
};

var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var todoPositionInput = document.getElementById('todoPosition');
    var updatedTodoInput = document.getElementById('updatedTodo');
    var todoPosition = todoPositionInput.value - 1;
    todoList.changeTodo(todoPosition, updatedTodoInput.value);
    todoPositionInput.value = '';
    updatedTodoInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var todoPositionInput = document.getElementById('deleteTodo');
    var todoPosition = todoPositionInput.value - 1;
    todoList.deleteTodo(todoPosition);
    todoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var todoPositionInput = document.getElementById('toggleCompleted');
    var todoPosition = todoPositionInput.value - 1;
    todoList.toggleCompleted(todoPosition);
    todoPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAllCompleted();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    
    for(var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var completed = todo.completed ? '[x]' : '[ ]';
      
      todoLi.textContent = completed + ' ' + todo.todoText;
      todoUl.appendChild(todoLi);
    }
  }
};






