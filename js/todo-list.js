const form = document.querySelector('#todo_list form');
const input = document.querySelector('#todo_list input');
const ul = document.querySelector('#todo_list ul');
const todoCount = document.querySelector('.todo-count');
const clearAll = document.querySelector('#todo_list .clear-all');

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const updateTodoCount = () => {
  todoCount.textContent = todos.length;
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(target.id));

  save();
  target.remove();
  updateTodoCount();
};

const addItem = (todo) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const icon = document.createElement('i');

  icon.classList.add('fa-solid', 'fa-xmark');
  span.innerText = todo.text;
  icon.addEventListener('click', delItem);

  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(icon);
  li.id = todo.id;

  updateTodoCount();
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  if((input.value) !== ''){
    todos.push(todo);
    addItem(todo);
    save();
    input.value = '';
  };
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));

  if(userTodos){
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  };

  updateTodoCount();
};

const clearItems = () => {
  ul.innerHTML = '';
  todoCount.textContent = 0;
  todos = [];
  localStorage.removeItem('todos');
  updateTodoCount();
};

init();
form.addEventListener('submit', handler);
clearAll.addEventListener('click', clearItems);