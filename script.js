/* ==========================================
   LOGIN
========================================== */

const correctUsername = "admin";
const correctPassword = "12345";


const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            const username =
                document.getElementById(
                    "username"
                ).value.trim();

            const password =
                document.getElementById(
                    "password"
                ).value;


            if (
                username === correctUsername &&
                password === correctPassword
            ) {

                sessionStorage.setItem(
                    "loggedIn",
                    "true"
                );

                window.location.href =
                    "menu.html";

            } else {

                document.getElementById(
                    "loginError"
                ).innerText =
                    "Incorrect username or password.";

            }

        }
    );

}


/* ==========================================
   QUESTIONS
========================================== */

const questions = [

    {
        question:
            "Qual é a idade máxima permitida para veículos utilizados no âmbito da TVDE?",
            image: "q1.jpg",

        options: [
            "5 ANOS",
            "10 ANOS",
            "7 ANOS",
            
        ],

        answer: 2
    },


    {
        question:
            "What does RAM stand for?",

        options: [
            "Read Access Memory",
            "Random Access Memory",
            "Run Access Memory",
            "Random Active Memory"
        ],

        answer: 1
    },


    {
        question:
            "Which language is used to style web pages?",

        options: [
            "HTML",
            "CSS",
            "Python",
            "Java"
        ],

        answer: 1
    },


    {
        question:
            "Which language is used to create web page structure?",

        options: [
            "CSS",
            "HTML",
            "SQL",
            "C++"
        ],

        answer: 1
    },


    {
        question:
            "Which one is a programming language?",

        options: [
            "Python",
            "HTML",
            "CSS",
            "HTTP"
        ],

        answer: 0
    },


    {
        question:
            "Which device is used to input text into a computer?",

        options: [
            "Monitor",
            "Printer",
            "Keyboard",
            "Speaker"
        ],

        answer: 2
    },


    {
        question:
            "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        answer: 0
    },


    {
        question:
            "Which one is an operating system?",

        options: [
            "Windows",
            "Google",
            "HTML",
            "Python"
        ],

        answer: 0
    },


    {
        question:
            "Which storage device uses flash memory?",

        options: [
            "SSD",
            "Keyboard",
            "Monitor",
            "Mouse"
        ],

        answer: 0
    },


    {
        question:
            "Which symbol is commonly used for comments in JavaScript?",

        options: [
            "//",
            "<!-- -->",
            "#",
            "**"
        ],

        answer: 0
    }

];


/* ==========================================
   PRACTICE
========================================== */

function startPractice() {

    sessionStorage.setItem(
        "quizType",
        "practice"
    );


    sessionStorage.setItem(
        "quizQuestions",
        JSON.stringify(questions)
    );


    window.location.href =
        "quiz.html";
}


/* ==========================================
   MOCK TEST
========================================== */

function startMockTest() {

    let shuffled =
        [...questions];


    shuffled.sort(
        () => Math.random() - 0.5
    );


    let mockQuestions =
        shuffled.slice(0, 30);


    sessionStorage.setItem(
        "quizType",
        "mock"
    );


    sessionStorage.setItem(
        "quizQuestions",
        JSON.stringify(mockQuestions)
    );


    window.location.href =
        "quiz.html";
}


/* ==========================================
   QUIZ VARIABLES
========================================== */

let quizQuestions = [];

let currentQuestion = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let answered = false;


/*
   Store answer status for each question

   null = not answered
   true = correct
   false = wrong
*/

let answerStatus = [];


const quizContainer =
    document.querySelector(
        ".quiz-card"
    );


/* ==========================================
   LOAD QUIZ
========================================== */

if (quizContainer) {

    const loggedIn =
        sessionStorage.getItem(
            "loggedIn"
        );


    if (loggedIn !== "true") {

        window.location.href =
            "index.html";

    }


    quizQuestions =
        JSON.parse(
            sessionStorage.getItem(
                "quizQuestions"
            )
        ) || [];


    if (
        quizQuestions.length === 0
    ) {

        window.location.href =
            "menu.html";

    } else {

        answerStatus =
            new Array(
                quizQuestions.length
            ).fill(null);


        createQuestionNavigation();

        showQuestion();

    }

}


/* ==========================================
   SHOW QUESTION
========================================== */

function showQuestion() {

    answered =
        answerStatus[currentQuestion] !== null;


    const question =
        quizQuestions[
            currentQuestion
        ];


    document.getElementById(
        "questionNumber"
    ).innerText =

        `QUESTION ${
            currentQuestion + 1
        } OF ${
            quizQuestions.length
        }`;


    document.getElementById(
        "questionText"
    ).innerText =
        question.question;
        const questionImage =
    document.getElementById("questionImage");

if (question.image) {

    questionImage.src =
        question.image;

    questionImage.style.display =
        "block";

} else {

    questionImage.style.display =
        "none";

}


    const optionsContainer =
        document.getElementById(
            "options"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function(option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(
                        65 + index
                    )}
                </span>

                <span class="option-text">
                    ${option}
                </span>

            `;


            button.onclick =
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                };


            optionsContainer.appendChild(
                button
            );

        }
    );


    updateNavigation();


    if (answered) {

        showPreviousAnswer();

    } else {

        document.getElementById(
            "feedback"
        ).innerText = "";

        document.getElementById(
            "feedback"
        ).className =
            "feedback";

        document.getElementById(
            "nextButton"
        ).disabled = true;

    }

}


/* ==========================================
   SELECT ANSWER
========================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {

        return;

    }


    answered = true;


    const question =
        quizQuestions[
            currentQuestion
        ];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    const feedback =
        document.getElementById(
            "feedback"
        );


    if (
        selectedIndex ===
        question.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        feedback.innerText =
            "✓ Correct Answer";


        feedback.className =
            "feedback correct-text";


        correctAnswers++;


        answerStatus[
            currentQuestion
        ] = true;


    } else {

        selectedButton.classList.add(
            "wrong"
        );


        allOptions[
            question.answer
        ].classList.add(
            "correct"
        );


        feedback.innerText =
            "✗ Wrong Answer";


        feedback.className =
            "feedback wrong-text";


        wrongAnswers++;


        answerStatus[
            currentQuestion
        ] = false;

    }


    document.getElementById(
        "nextButton"
    ).disabled = false;


    updateNavigation();

}


/* ==========================================
   SHOW PREVIOUS ANSWER
========================================== */

function showPreviousAnswer() {

    const question =
        quizQuestions[
            currentQuestion
        ];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    const status =
        answerStatus[
            currentQuestion
        ];


    if (status === true) {

        allOptions[
            question.answer
        ].classList.add(
            "correct"
        );


        document.getElementById(
            "feedback"
        ).innerText =
            "✓ Correct Answer";


        document.getElementById(
            "feedback"
        ).className =
            "feedback correct-text";

    } else {

        /*
           Previous wrong answer is not stored
           separately in this simple version.
           Correct answer is shown.
        */

        allOptions[
            question.answer
        ].classList.add(
            "correct"
        );


        document.getElementById(
            "feedback"
        ).innerText =
            "✗ Wrong Answer";


        document.getElementById(
            "feedback"
        ).className =
            "feedback wrong-text";

    }


    document.getElementById(
        "nextButton"
    ).disabled = false;

}


/* ==========================================
   NEXT
========================================== */

function nextQuestion() {

    if (!answered) {

        return;

    }


    if (
        currentQuestion <
        quizQuestions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();

    }

}


/* ==========================================
   PREVIOUS
========================================== */

function previousQuestion() {

    if (
        currentQuestion > 0
    ) {

        currentQuestion--;

        showQuestion();

    }

}


/* ==========================================
   QUESTION NAVIGATION
========================================== */

function createQuestionNavigation() {

    const nav =
        document.getElementById(
            "questionNav"
        );


    nav.innerHTML = "";


    quizQuestions.forEach(
        function(question, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "nav-number";


            button.innerText =
                index + 1;


            button.onclick =
                function() {

                    currentQuestion =
                        index;

                    showQuestion();

                };


            nav.appendChild(
                button
            );

        }
    );

}


/* ==========================================
   UPDATE NAVIGATION
========================================== */

function updateNavigation() {

    const buttons =
        document.querySelectorAll(
            ".nav-number"
        );


    buttons.forEach(
        function(button, index) {

            button.classList.remove(
                "active"
            );

            button.classList.remove(
                "correct-nav"
            );

            button.classList.remove(
                "wrong-nav"
            );


            if (
                index ===
                currentQuestion
            ) {

                button.classList.add(
                    "active"
                );

            }


            if (
                answerStatus[index] ===
                true
            ) {

                button.classList.add(
                    "correct-nav"
                );

            }


            if (
                answerStatus[index] ===
                false
            ) {

                button.classList.add(
                    "wrong-nav"
                );

            }

        }
    );

}


/* ==========================================
   RESULT
========================================== */

function showResult() {

    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (
                correctAnswers /
                total
            ) * 100
        );


    const quizType =
        sessionStorage.getItem(
            "quizType"
        );


    document.querySelector(
        ".quiz-card"
    ).innerHTML = `

        <div class="result-page">

            <h1>
                Test Completed!
            </h1>


            <div class="result-box">

                <div class="result-item">

                    Total

                    <strong>
                        ${total}
                    </strong>

                </div>


                <div class="result-item">

                    Correct

                    <strong>
                        ${correctAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    Wrong

                    <strong>
                        ${wrongAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    Score

                    <strong>
                        ${percentage}%
                    </strong>

                </div>

            </div>


            <button
                class="finish-button"
                onclick="finishQuiz()">

                Finish

            </button>

        </div>

    `;

}


/* ==========================================
   HOME
========================================== */

function goHome() {

    window.location.href =
        "menu.html";

}


/* ==========================================
   LOGOUT
========================================== */

function logout() {

    sessionStorage.clear();

    window.location.href =
        "index.html";

}


/* ==========================================
   FINISH
========================================== */

function finishQuiz() {

    const quizType =
        sessionStorage.getItem(
            "quizType"
        );


    sessionStorage.removeItem(
        "quizQuestions"
    );


    sessionStorage.removeItem(
        "quizType"
    );


    if (
        quizType === "mock"
    ) {

        window.location.href =
            "index.html";

    } else {

        window.location.href =
            "menu.html";

    }

}