function init() {
    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click', addTask)
}

function addTask() {
    const inputTask = document.getElementById('todoInput')

    if (inputTask.value.trim().length !== 0) {
        const liElement = document.createElement('li')
        const ulElement = document.getElementById('todoList')

        liElement.textContent = inputTask.value
        ulElement.appendChild(liElement)

        inputTask.value = ''
    } else {
        alert('Please enter a task before adding!!!')
    }
}
init();

