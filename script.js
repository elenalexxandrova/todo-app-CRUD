const textInput = document.querySelector('.text_input');
const createButton = document.querySelector('.create_btn');
const todosContainer = document.querySelector('.todos_container');

createButton.addEventListener("click", () => {
    if (textInput.value.trim().length == '')
        return;


    //создаем новый div c классом todo_item_container в todosContainer
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo_item_container');

    todosContainer.append(todoItemContainer);


    //создаем p с классом todo_text
    const todoText = document.createElement('p');
    todoText.className = 'todo_text';
    todoText.innerText = textInput.value;
    todoItemContainer.append(todoText);

    //Добавляем двойное нажатие на текст тудушки когда задача сделана
    todoText.addEventListener('dblclick', () => {
        todoText.classList.add('line-through');
        updateBtn.setAttribute("disabled", "disabled");
    })


    //создаем button с классом update
    const updateBtn = document.createElement('button');
    updateBtn.className = 'update';
    updateBtn.innerText = 'Update';
    todoItemContainer.append(updateBtn);
    //добавляем эвент click на кнопку Update
    updateBtn.addEventListener('click', () => {
        textInput.value = todoText.innerText;
        const parent = updateBtn.parentElement;
        parent.parentElement.removeChild(parent);
    })

    //создаем button с классом delete
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';
    todoItemContainer.append(deleteBtn);
    //добавляем эвент click на кнопку Delete
    deleteBtn.addEventListener('click', () => {
        const parent = deleteBtn.parentElement;
        parent.parentElement.removeChild(parent);
    })

    textInput.value = '';

})