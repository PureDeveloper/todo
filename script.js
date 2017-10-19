var todos = ['item 1', 'item 2', 'item 3', 'itme 4'];

function displayTodos(){
  console.log(todos);
}

function addTodos(todo){
  todos.push(todo);
  displayTodos();
}

function changeTodos(todoIdx, value){
  todos[todoIdx] = value;
  displayTodos();
}

function deleteTodo(todoIdx){
  todos.splice(todoIdx, 1);
  displayTodos();
}