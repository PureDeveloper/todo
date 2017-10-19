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

    this.todos.forEach(function(todo){
      if(todo.completed) numCompleted++;
    });
    this.todos.forEach(function(todo){
      numCompleted === totalTodos ? todo.completed = false : todo.completed = true;
    });
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
  deleteTodo: function(position){
    todoList.deleteTodo(position);
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

    todoList.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      var completed = todo.completed ? '[x]' : '[ ]';
      
      todoLi.id = position;
      todoLi.textContent = completed + ' ' + todo.todoText + ' ';
      todoLi.appendChild(this.createDeleteBtn());
      todoUl.appendChild(todoLi);
    }, this);
    
  },
  createDeleteBtn: function(){
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteButton', 'btn', 'btn-danger', 'btn-sm');
    return deleteBtn;
  },
  setUpEventListeners: function(){
    var todoUl = document.querySelector('ul');
    todoUl.addEventListener('click', function(evt){
      // get the elem that was clicked on
      var elementClicked = evt.target;
      // check if elementClicked is a 
      if (elementClicked.outerText === 'X') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

//  high order functions with callback functions
// function countToNum(){
//   for(var i = 1; i <= 10; i++){
//     console.log(i);
//   }
// }
// function debug(func){
//   debugger;
//   func();
// }
// debug(countToNum);

// setTimeout(function(){
//   console.log('Wake Up!');
// }, 5000);
// var arr =  ['joe', 'sally', 'john', 'sam'];
// var print = function print(name){
//   console.log(name);
// }
// arr.forEach(print);
