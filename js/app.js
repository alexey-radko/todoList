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

    bindEvents(listeItem);
    return listeItem;

}

function addTodoItem(event) {
    event.preventDefault();
    if(addInput.value === '') return alert ('write some text');
    const todoItem = createItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';

}


function bindEvents(listItem){
    let checkbox = listItem.querySelector('.checkbox');
    let editButton = listItem.querySelector('button.edit');
    let deleteButton = listItem.querySelector('button.delete');

    checkbox.addEventListener('change',toggleTodoItem);
    editButton.addEventListener('click', editItem);
    deleteButton.addEventListener('click', deleteTodoItem);


}
function toggleTodoItem(event) {
    const task = this.parentNode;
    task.classList.toggle('completed');
   console.log(this);
}
function editItem() {
    let task = this.parentNode;
    let title = task.querySelector('.title')
    let editInput = task.querySelector('.textfield');
    let isEditing = task.classList.contains('editing');

    if(isEditing) {
        if(editInput.value === ''){
            
            return alert ('write some text');
        } 
        title.innerText = editInput.value;
        this.innerText = 'edit';
    } else {
        if(title.value === ''){
            
            return alert ('write some text');
        } 
        editInput.value = title.innerText;
        this.innerText = 'save';
    }
        task.classList.toggle('editing');
}

function deleteTodoItem() {
    let task = this.parentNode;
    todoList.removeChild(task);

}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');


function main() {
    todoForm.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvents(item));

}
main();
