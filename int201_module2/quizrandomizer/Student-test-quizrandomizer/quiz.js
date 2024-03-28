//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500071      Name: Woranuch Naritnet

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz

function init() {
//insert your code here
const newQuizBtn = document.createElement('button')
newQuizBtn.addEventListener('click',generateQuiz)
newQuizBtn.textContent="New Quiz"

const clearQuizBtn =document.createElement('button')
clearQuizBtn.addEventListener('click',clearQuiz)
clearQuizBtn.textContent="Clear Quiz"

const menuBtn = document.getElementById('menu')
menuBtn.appendChild(newQuizBtn)
menuBtn.appendChild(clearQuizBtn)


}

function generateQuiz() {
   clearQuiz()

randomQuiz = getRandomQuiz()
 

const divQues = document.createElement('div')
divQues.setAttribute('id',"question")
const p1 = document.createElement('p')

p1.textContent = randomQuiz.question

divQues.appendChild(p1)

const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
const btn4 = document.createElement('button')

btn1.style.margin = '5px'
btn2.style.margin = '5px'
btn3.style.margin = '5px'
btn4.style.margin = '5px'

btn1.textContent = randomQuiz.options[0]
btn2.textContent = randomQuiz.options[1]
btn3.textContent = randomQuiz.options[2]
btn4.textContent = randomQuiz.options[3]

btn1.addEventListener('click',checkAnswer)
btn2.addEventListener('click',checkAnswer)
btn3.addEventListener('click',checkAnswer)
btn4.addEventListener('click',checkAnswer)

divQues.appendChild(btn1)
divQues.appendChild(btn2)
divQues.appendChild(btn3)
divQues.appendChild(btn4)

const divQuesCon = document.getElementById('quizContainer')
divQuesCon.appendChild(divQues)


// p1.textContent =  getRandomQuiz.value
// p2.textContent =  getRandomQuiz.value 
// p3.textContent =  getRandomQuiz.value
// p4.textContent =  getRandomQuiz.value

// divQues.appendChild(p1)
// divQues.appendChild(p2)
// divQues.appendChild(p3)
// divQues.appendChild(p4)

// p1.addEventListener('click',checkAnswer)
// p2.addEventListener('click',checkAnswer)
// p3.addEventListener('click',checkAnswer)
// p4.addEventListener('click',checkAnswer)


// const divQuesCon = document.getElementById('quizContainer')
// divQuesCon.appendChild(divQues)

}

function clearQuiz() {
//insert your code here
const divQuesCon = document.getElementById('quizContainer')
divQuesCon.textContent = ''

const divAns = document.querySelector('.answer')
divAns.textContent = ''


// const clear = document.getElementById('quizContainer')
// const quiz = clear.classList
// quiz.remove.apply(quiz)
// clear.textContent = quiz

// const remove = document.getElementsByClassName('answer')
// const answer = remove.classList
// quiz.remove.apply(answer)
// clear.textContent = answer


}

function checkAnswer(e) { // เก็บข้อมูลของ Poperty ของข้อมูลตัวไหน ทำอะไรบ้าง
//insert your code here

const divAns = document.getElementsByClassName('answer')[0]
if(e.target.textContent === randomQuiz.answer){
   divAns.textContent = 'correct'
} else {
   divAns.textContent = 'incorrect'
}

// const ansElement = document.getElementsByClassName('answer')
//  if(ansElement === getRandomQuiz.value){
//     ansElement.textContent = "correct"
//  }
//  else ansElement = 'incorrect'

}

init();
