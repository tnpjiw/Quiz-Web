// DOM Elements
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const startBtn = document.querySelector('#start-btn')
const answersContainer = document.querySelector('#answers-container')
const questionText = document.querySelector('#question-text')
const answersBtn = document.querySelector('.answers-btn')
const totalScore = document.querySelector('#score')
const progerssBar = document.querySelector('.progress')

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

let currentIndex
let score = 0 

const startQuiz = startBtn.addEventListener('click', () =>{
    startScreen.classList.remove('active')
    quizScreen.classList.add('active')
    changeQuestion(currentIndex = 0)
    pushAnswers()
})

const changeQuestion = () => {
    questionText.innerHTML = ''
    const q = questionAll[currentIndex]
    questionText.textContent = q.question
}

const pushAnswers = () => {
    answersContainer.innerHTML = ''
    
    questionAll[currentIndex].answers.forEach(answers => {
        const span = document.createElement('span')
        span.classList.add('answers-btn')
        span.textContent = answers.text

        span.addEventListener('click' , () =>{
            state += 20
            updateProgress()
            if(answers.correct === true){
                
                span.classList.add('correct')
                totalScore.textContent = score += 1
            }else if(answers.correct === false){
                
                span.classList.add('incorrect')
               document.querySelectorAll('.answers-btn').forEach((btn,i) =>{
                    if(questionAll[currentIndex].answers[i].correct){
                        btn.classList.add('correct')
                    }
                })
            }
        })
        answersContainer.appendChild(span)
    })
}

let state = 0
const updateProgress = () =>{
    progerssBar.style.width = state + '%'
}



