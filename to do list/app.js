// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// Scope of variable in JS
// Debugging tools in GC VSCode


// function
const addTodo = (event) => {
    // prevent form from submitting 
    event.preventDefault() 
    // todoDIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');

    // createLI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;   
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);   

    // check button 
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDIV.appendChild(completeButton);

    // delete button 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML ='<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDIV.appendChild(deleteButton);

    // append todo list
    todoList.appendChild(todoDIV);

    // clear todoInput value 
    todoInput.value = '';
};

const deleteCheck = (event) => {
    const item = event.target;
    // deleteTodo 
    if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // animation 
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
        todo.remove();
    })
   
    }

    // check mark 
    if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    }
};

const filterTodo = (e) => {
    const todos = todoList.childNodes; 
    for ( i = 1, ii = todos.length; i < ii; i++) { 
        switch(e.target.value) {
            case "all":
                todos[i].style.display = 'flex';
                break;
            case 'completed':
                if ( todos[i].classList.contains('completed')) {
                    todos[i].style.display = 'flex';
                } else {
                    todos[i].style.display = 'none';
                }
                break;
            case "uncompleted":
                if ( !todos[i].classList.contains('completed')) {
                    todos[i].style.display = 'flex';
                } else {
                    todos[i].style.display = 'none';
                }
                break; 
        };
    };
};
// Event listener 
filterOption.addEventListener('click', filterTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



