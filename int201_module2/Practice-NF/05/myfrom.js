function init() {
    // in head 
    const headEle = document.querySelector('head')
    // create title element & add title element 
    const titleEle = document.createElement('title')
    titleEle.textContent = 'Registration Form'
    headEle.appendChild(titleEle)

    // in body
    const bodyEle = document.querySelector('body')
    // create h2 element & add h2 element 
    const h2Ele = document.createElement('h2')
    h2Ele.textContent = 'Register'
    bodyEle.appendChild(h2Ele)

    // create first div
    const firstDiv = document.createElement('div')
    h2Ele.appendChild(firstDiv)
    // create label element 
    const labelEle1 = document.createElement('label')
    labelEle1.setAttribute('for', 'name')
    labelEle1.textContent = 'Full Name:'
    // create input element 
    const inputEle1 = document.createElement('input')
    inputEle1.type = 'text'
    inputEle1.id = 'name'
    inputEle1.name = 'name'
    inputEle1.required = ''
    // add label element & input element in first div
    firstDiv.appendChild(labelEle1)
    firstDiv.appendChild(inputEle1)

    // create second div
    const secondDiv = document.createElement('div')
    h2Ele.appendChild(secondDiv)
    // create label element 
    const labelEle2 = document.createElement('label')
    labelEle2.setAttribute('for', 'name')
    labelEle2.textContent = 'Email Address:'
    // create input element 
    const inputEle2 = document.createElement('input')
    inputEle2.type = 'email'
    inputEle2.id = 'email'
    inputEle2.name = 'email'
    inputEle2.required = ''
    // add label element & input element in second div
    secondDiv.appendChild(labelEle2)
    secondDiv.appendChild(inputEle2)

    // create third div
    const thirdDiv = document.createElement('div')
    h2Ele.appendChild(thirdDiv)
    // create button element
    const buttonEle = document.createElement('button')
    buttonEle.type = 'submit'
    buttonEle.textContent = 'Register'
    // add button element in third div
    thirdDiv.appendChild(buttonEle)

    // create fourth div
    const fourthdDiv = document.createElement('div')
    h2Ele.appendChild(fourthdDiv)

    // add event
    buttonEle.addEventListener('click', showUserRegister)
}

function showUserRegister() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')

    // get name and email input values
    if (name.value.trim().length === 0) {
        alert('Please enter your name !!!')
    } else if (email.value.trim().length === 0) {
        alert('Please enter your email !!!')
    } else {
        // create <p>
        const pEle = document.createElement('p')
        pEle.textContent = `Name: ${name.value}, Email: ${email.value}`
        // last div 
        const divParent = document.getElementsByTagName('div')
        const lastDiv = divParent[3]
        // add <p> in last div
        lastDiv.appendChild(pEle)

        name.value = ''
        email.value = ''
    }
}
init()