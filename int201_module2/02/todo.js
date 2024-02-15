function init() {
    //your code here
    const addButton = document.querySelector('Button')
    //console.log(addButton) 
    addButton.addEventListener('click',addTask)

    }
    function addTask() {
    //your code here
    const liTag = document.createElement('li')
    const inputText = document.querySelector('input')
    liTag.textContent = inputText.value

    const ulTag = document.getElementById('todoList')
    ulTag.appendChild(liTag)

    inputText.value = ''
    }
    init();
