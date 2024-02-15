function init() {
    const div = document.getElementsByTagName('div')

    // first<div>
    const firstDiv = div[0]
    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.placeholder = 'Enter a new task'
    // or use
    // inputElement.setAttribute('type', 'text')
    // inputElement.setAttribute('placeholder', 'Enter a new task')
    firstDiv.appendChild(inputElement)

    const buttonElement = document.createElement('button')
    buttonElement.textContent = 'Add'
    firstDiv.appendChild(buttonElement)

    // second<div>
    const secondDiv = div[1]
    const ulElement = document.createElement('ul')
    ulElement.id = 'todoList'
    // or use
    // ulElement.setAttribute('id', 'todoList')
    secondDiv.appendChild(ulElement)

    const addButton = document.querySelector('button')
    addButton.addEventListener('click', addTask)
}

function addTask() {
    const inputTask = document.querySelector('input')

    if (inputTask.value.trim().length !== 0) {
        const ulElement = document.querySelector('#todoList')
        const liElement = document.createElement('li')

        liElement.textContent = inputTask.value
        ulElement.appendChild(liElement)

        inputTask.value = ''
    } else {
        alert('Please enter a task before adding !!!')
    }
}
init();
