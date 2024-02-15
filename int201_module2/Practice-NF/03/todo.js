function init() {
    const addButton = document.querySelector('button')
    // console.log(addButton);
    addButton.addEventListener('click', addTask)
}
function addTask() {
    const inputTask = document.querySelector('input')

    if (inputTask.value.trim().length !== 0) {
        const ulElement = document.querySelector('#todoList')
        const liElement = document.createElement('li')

        liElement.textContent = inputTask.value
        ulElement.append(liElement)

        inputTask.value = ''
    } else {
        alert('Please enter a task before adding!!!')
    }
}
init();