function init() {
    //your code here
    const addButton = document.querySelector('Button')
    addButton.addEventListener('click',addTask)
    }
    function addTask() {
    //your code here
    const liTag = document.createElement('li')
    const inputText = document.querySelector('input')
    liTag.textContent = inputText.value

    const ulTag = document.querySelector('ul')
    ulTag.appendChild(liTag)

    inputText.value = ''
    }
    init();