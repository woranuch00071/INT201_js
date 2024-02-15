function init() {
    const addButton = document.querySelector('.addButton')
    addButton.addEventListener('click', addTask)
}
function addTask() {
    const inputTask = document.querySelector('.todoInput')

    if (inputTask.value.trim().length !== 0) {
        const ulElement = document.querySelector('#todoList')
        const liElement = document.createElement('li')

        liElement.textContent = inputTask.value
        ulElement.appendChild(liElement)

        inputTask.value = ''
    } else {
        alert('Please enter a task before adding!!!')
    }
}
init();