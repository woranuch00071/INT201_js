function init() {
    //your code here
    const inputTag = document.createElement('input')
    inputTag.setAttribute('type',"text")
    inputTag.setAttribute('placeholder',"Enter a new task")

    const buttonTag = document.createElement('button')
    buttonTag.textContent='Add'

    const ulTag = document.createElement('ul')
    ulTag.setAttribute('id','todoList')

    const div = document.getElementsByTagName('div')
    //console.log(div)
    const div1 = div[0]
    div1.appendChild(inputTag)
    div1.appendChild(buttonTag)
    
    const div2 = div[1]
    div2.appendChild(ulTag)

    const addButton = document.querySelector('button')
    addButton.addEventListener('click',addTask)

    }
    function addTask() {
    //your code here
    const liTag = document.createElement('li')
    const inputTag = document.querySelector('input')
    liTag.textContent=inputTag.value

    const ulTag = document.querySelector('ul')
    ulTag.appendChild(liTag)

    inputTag.value = ''

    }
    init();