// DOM Elements
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const startBtn = document.querySelector('#start-btn')
const answersContainer = document.querySelector('#answers-container')
const questionText = document.querySelector('#question-text')
const answersBtn = document.querySelector('.answers-btn')
const currentScore = document.querySelector('#score')
const progerssBar = document.querySelector('.progress')
const resultScreen = document.getElementById('result-screen')
const currentQuestion = document.querySelector('#current-question')
const finalScore = document.getElementById('final-score')
const resultMessage = document.getElementById('result-message')
const restartBtn = document.getElementById('restart-btn')

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
let score = 0 

const startQuiz = startBtn.addEventListener('click', () =>{
    startScreen.classList.remove('active')
    quizScreen.classList.add('active')
    changeQuestion(currentIndex = 0)
})

const changeQuestion = () => {
    questionText.innerHTML = ''
    const q = questionAll[currentIndex]
    questionText.textContent = q.question
    currentQuestion.textContent = currentIndex + 1

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
                currentScore.textContent = score += 1
            }else if(answers.correct === false){
                
                span.classList.add('incorrect')
               document.querySelectorAll('.answers-btn').forEach((btn,i) =>{
                    if(questionAll[currentIndex].answers[i].correct){
                        btn.classList.add('correct')
                    }
                })
            }
            
            setTimeout(() =>{
                currentIndex++

                if(currentIndex < questionAll.length){
                    changeQuestion()
                }else if(currentIndex >= questionAll.length){
                    quizScreen.classList.remove('active')
                    resultScreen.classList.add('active')
                    finalScore.textContent = score
                    if(score >= 3){
                        resultMessage.textContent = 'Good Job!'
                    }else{
                        resultMessage.textContent = 'Fail!'
                    }
                }
            }, 2000)
        })
        answersContainer.appendChild(span)
        restartBtn.addEventListener('click', () => {
            currentIndex = 0
            score = 0

            resultScreen.classList.remove('active')
            startScreen.classList.add('active')
            changeQuestion()
        })
    })
}



let state = 0
const updateProgress = () =>{
    progerssBar.style.width = state + '%'
}



