function init() {
    const titleTag = document.createElement('title')
    titleTag.textContent = "Registration From"
    document.head.appendChild(titleTag)

    const h2 = document.createElement('h2')
    h2.textContent = "Register"
    document.body.appendChild(h2)

    const div1 = document.createElement('div')
  
    document.body.appendChild(div1)

    const labelTag1 = document.createElement('label')
    labelTag1.setAttribute('for',"name")
    labelTag1.textContent="Full Name:"
    
    const inputTag1 = document.createElement('input')
    inputTag1.setAttribute('type',"text")
    inputTag1.setAttribute('id',"name")
    inputTag1.name="name"
    inputTag1.required

    div1.appendChild(labelTag1)
    div1.appendChild(inputTag1)

    const div2 = document.createElement('div')
    
    document.body.appendChild(div2)

    const labelTag2 = document.createElement('label')
    labelTag2.setAttribute('for',"email")
    labelTag2.textContent="Email Address:"

    const inputTag2 = document.createElement('input')
    inputTag2.setAttribute('type',"email")
    inputTag2.setAttribute('id',"email")
    inputTag2.setAttribute('name',"email")
    inputTag2.required
    
    div2.appendChild(labelTag2)
    div2.appendChild(inputTag2)

    const div3 = document.createElement('div')
  
    document.body.appendChild(div3)


    const button = document.createElement('button')
    button.setAttribute('type',"submit")
    button.textContent = "Register"

    div3.appendChild(button)

    const div4 = document.createElement('div')
    document.body.appendChild(div4)
    
    const addButton = document.querySelector('button')
    addButton.addEventListener('click',showUserRegister)

    }
    function showUserRegister(){
    //your code here
    const pTag = document.createElement('p')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    pTag.textContent = `Name : ${name.value}, Email : ${email.value}`
    const div = document.getElementsByTagName('div')
    const lastDiv = div[3]
    lastDiv.appendChild(pTag)


    }
    init();