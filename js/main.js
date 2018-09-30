function createItem(title) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.className = 'delete';

    const listeItem = document.createElement('li');
    listeItem.className = 'todo-item';


    listeItem.appendChild(checkBox);
    listeItem.appendChild(label);
    listeItem.appendChild(editInput);
    listeItem.appendChild(editButton);
    listeItem.appendChild(deleteButton);

    // bindEvents(listeItem);
    return listeItem;

}

function addTodoItem(e) {
    e.preventDefault();
    if(addInput.value === '') return alert ('write some text');
    const todoItem = createItem(addInput.value);
    todolist.appendChild(todoItem);
    addInput.value = '';

}
const todoForm = document.getElementById('todo-form');
const addButton  = document.getElementById('add-button');
const todolist  = document.getElementById('todo-list');
// const todoItem  = document.getElementById('todo-item');
const addInput = document.getElementById('add-input');

todoForm.addEventListener('submit', addTodoItem);
