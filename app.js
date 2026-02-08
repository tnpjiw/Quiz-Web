// DOM Elements
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const startBtn = document.querySelector('#start-btn')
const answersContainer = document.querySelector('#answers-container')
const questionText = document.querySelector('#question-text')

const questionAll = [
    {
        question:'Variable Declaration',
        answers:[
            {text: 'var', correct : false},
            {text: 'let', correct : false},
            {text: 'const', correct : true},
            {text: 'define', correct : false}
        ]
    },
     {
        question:'Output',
        answers:[
            {text: 'null', correct : false},
            {text: 'undefined', correct : false},
            {text: 'object', correct : true},
            {text: 'number', correct : false}
        ]
    },
     {
        question:'Array Method',
        answers:[
            {text: 'shift()', correct : false},
            {text: 'pop()', correct : false},
            {text: 'push()', correct : true},
            {text: 'unshift()', correct : false}
        ]
    },
     {
        question:'Equality',
        answers:[
            {text: 'false', correct : false},
            {text: 'true', correct : true},
            {text: 'undefined', correct : false},
            {text: 'error', correct : false}
        ]
    },
     {
        question:'Function Type',
        answers:[
            {text: 'A function that runs faster', correct : false},
            {text: 'A shorter syntax for writing functions', correct : true},
            {text: 'A loop structure', correct : false},
            {text: 'A class', correct : false}
        ]
    },

]

let currentIndex = 0

const startQuiz = startBtn.addEventListener('click', () =>{
    startScreen.classList.remove('active')
    quizScreen.classList.add('active')
    changeQuestion()
})

const changeQuestion = () =>{
    questionText.innerHTML = ''
    const q = questionAll[currentIndex]

    questionText.textContent = q.question
}

