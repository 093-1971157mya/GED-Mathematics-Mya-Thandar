/* =====================================================
   GED MATHEMATICS 30 QUESTION TEST
   ===================================================== */


/* QUESTIONS */

const questions = [

    // ================= FUNCTIONS =================

    {
        topic: "Functions",

        question:
            "Which table does NOT represent a function?",

        options: [
            "A. x: 1,2,3; y: 4,5,6",
            "B. x: 2,3,4; y: 4,4,6",
            "C. x: 1,1,5; y: 2,4,6",
            "D. x: 4,5,6; y: 1,2,3"
        ],

        answer: "C",

        explanation:
            "C is not a function because x = 1 has two different outputs: 2 and 4."
    },


    {
        topic: "Functions",

        question:
            "If f(x) = 2x + 5, what is f(3)?",

        options: [
            "A. 8",
            "B. 10",
            "C. 11",
            "D. 12"
        ],

        answer: "C",

        explanation:
            "f(3) = 2(3) + 5 = 11."
    },


    {
        topic: "Functions",

        question:
            "If f(x) = x² - 4, what is f(5)?",

        options: [
            "A. 9",
            "B. 21",
            "C. 25",
            "D. 29"
        ],

        answer: "B",

        explanation:
            "f(5) = 5² - 4 = 25 - 4 = 21."
    },


    {
        topic: "Functions",

        question:
            "Which equation represents a function of x?",

        options: [
            "A. x = y² + 1",
            "B. y = 3x - 2",
            "C. x² + y² = 25",
            "D. x = y²"
        ],

        answer: "B",

        explanation:
            "y = 3x - 2 gives exactly one y-value for every x-value."
    },


    {
        topic: "Functions",

        question:
            "For f(x) = -3x + 7, what is f(2)?",

        options: [
            "A. 1",
            "B. 5",
            "C. 13",
            "D. -1"
        ],

        answer: "A",

        explanation:
            "f(2) = -3(2) + 7 = 1."
    },


    {
        topic: "Functions",

        question:
            "A function has the rule y = 4x - 1. What is the output when x = 6?",

        options: [
            "A. 20",
            "B. 23",
            "C. 24",
            "D. 25"
        ],

        answer: "B",

        explanation:
            "4(6) - 1 = 23."
    },


    {
        topic: "Functions",

        question:
            "Which set of ordered pairs represents a function?",

        options: [
            "A. {(1,2), (1,5), (3,7)}",
            "B. {(2,4), (3,4), (2,6)}",
            "C. {(1,3), (2,3), (3,3)}",
            "D. {(4,1), (4,2), (5,3)}"
        ],

        answer: "C",

        explanation:
            "In C, each input appears only once."
    },


    {
        topic: "Functions",

        question:
            "If f(x) = 5x - 10 and f(x) = 20, what is x?",

        options: [
            "A. 2",
            "B. 4",
            "C. 5",
            "D. 6"
        ],

        answer: "D",

        explanation:
            "5x - 10 = 20, so 5x = 30 and x = 6."
    },


    {
        topic: "Functions",

        question:
            "A function is y = 2x - 3. What is the y-intercept?",

        options: [
            "A. -3",
            "B. 2",
            "C. 3",
            "D. -2"
        ],

        answer: "A",

        explanation:
            "In y = mx + b, b is the y-intercept. Therefore, b = -3."
    },


    {
        topic: "Functions",

        question:
            "Which relation is NOT a function?",

        options: [
            "A. {(0,1), (1,2), (2,3)}",
            "B. {(2,5), (3,5), (4,5)}",
            "C. {(-1,4), (0,4), (1,4)}",
            "D. {(2,1), (2,3), (4,5)}"
        ],

        answer: "D",

        explanation:
            "D has x = 2 paired with two different outputs."
    },


    {
        topic: "Functions",

        question:
            "If f(x) = 3x + 2, which ordered pair is on the graph?",

        options: [
            "A. (1,4)",
            "B. (2,8)",
            "C. (3,10)",
            "D. (4,13)"
        ],

        answer: "B",

        explanation:
            "When x = 2, y = 3(2) + 2 = 8."
    },


    {
        topic: "Functions",

        question:
            "What is the domain of {(2,5), (4,7), (6,9)}?",

        options: [
            "A. {5,7,9}",
            "B. {2,4,6}",
            "C. {2,5,4,7,6,9}",
            "D. {7,9}"
        ],

        answer: "B",

        explanation:
            "The domain contains the input values: 2, 4, and 6."
    },


    {
        topic: "Functions",

        question:
            "If g(x) = x + 9, which value of x gives g(x) = 15?",

        options: [
            "A. 5",
            "B. 6",
            "C. 7",
            "D. 24"
        ],

        answer: "B",

        explanation:
            "x + 9 = 15, so x = 6."
    },


    {
        topic: "Functions",

        question:
            "Which statement is true about a function?",

        options: [
            "A. One input can have two outputs.",
            "B. Every input must have exactly one output.",
            "C. Every output must have exactly one input.",
            "D. Inputs and outputs must always be equal."
        ],

        answer: "B",

        explanation:
            "A function assigns exactly one output to each input."
    },


    // ================= LINEAR EQUATIONS =================

    {
        topic: "Linear Equations",

        question:
            "Solve: 2x + 5 = 17.",

        options: [
            "A. 5",
            "B. 6",
            "C. 7",
            "D. 11"
        ],

        answer: "B",

        explanation:
            "2x = 12, therefore x = 6."
    },


    {
        topic: "Linear Equations",

        question:
            "Solve: 3x - 7 = 14.",

        options: [
            "A. 5",
            "B. 6",
            "C. 7",
            "D. 8"
        ],

        answer: "C",

        explanation:
            "3x = 21, therefore x = 7."
    },


    {
        topic: "Linear Equations",

        question:
            "Solve: 5x + 2 = 32.",

        options: [
            "A. 5",
            "B. 6",
            "C. 7",
            "D. 8"
        ],

        answer: "B",

        explanation:
            "5x = 30, therefore x = 6."
    },


    {
        topic: "Linear Equations",

        question:
            "What is the slope of y = 4x - 9?",

        options: [
            "A. -9",
            "B. -4",
            "C. 4",
            "D. 9"
        ],

        answer: "C",

        explanation:
            "In y = mx + b, m is the slope. The slope is 4."
    },


    {
        topic: "Linear Equations",

        question:
            "What is the y-intercept of y = -2x + 6?",

        options: [
            "A. -2",
            "B. 2",
            "C. 6",
            "D. -6"
        ],

        answer: "C",

        explanation:
            "The y-intercept is b = 6."
    },


    {
        topic: "Linear Equations",

        question:
            "Which equation has a slope of 3 and a y-intercept of -4?",

        options: [
            "A. y = -4x + 3",
            "B. y = 3x - 4",
            "C. y = 4x - 3",
            "D. y = 3x + 4"
        ],

        answer: "B",

        explanation:
            "Using y = mx + b, m = 3 and b = -4."
    },


    {
        topic: "Linear Equations",

        question:
            "Solve: 4(x - 2) = 20.",

        options: [
            "A. 3",
            "B. 5",
            "C. 7",
            "D. 8"
        ],

        answer: "C",

        explanation:
            "x - 2 = 5, so x = 7."
    },


    {
        topic: "Linear Equations",

        question:
            "Solve: 7x + 3 = 45.",

        options: [
            "A. 5",
            "B. 6",
            "C. 7",
            "D. 8"
        ],

        answer: "B",

        explanation:
            "7x = 42, so x = 6."
    },


    {
        topic: "Linear Equations",

        question:
            "A line passes through (0, 2) and (3, 8). What is its slope?",

        options: [
            "A. 2",
            "B. 3",
            "C. 6",
            "D. 10"
        ],

        answer: "A",

        explanation:
            "Slope = (8 - 2) / (3 - 0) = 6 / 3 = 2."
    },


    {
        topic: "Linear Equations",

        question:
            "Which equation represents a line with slope -1 and y-intercept 5?",

        options: [
            "A. y = x + 5",
            "B. y = -x + 5",
            "C. y = -5x + 1",
            "D. y = 5x - 1"
        ],

        answer: "B",

        explanation:
            "m = -1 and b = 5, so y = -x + 5."
    },


    {
        topic: "Linear Equations",

        question:
            "Solve: 9x - 4 = 32.",

        options: [
            "A. 3",
            "B. 4",
            "C. 5",
            "D. 6"
        ],

        answer: "B",

        explanation:
            "9x = 36, therefore x = 4."
    },


    {
        topic: "Linear Equations",

        question:
            "A taxi charges $4 plus $2 per mile. Which equation gives the cost C for m miles?",

        options: [
            "A. C = 4m + 2",
            "B. C = 2m + 4",
            "C. C = 6m",
            "D. C = 2m - 4"
        ],

        answer: "B",

        explanation:
            "The starting fee is $4 and the rate is $2 per mile. C = 2m + 4."
    },


    {
        topic: "Linear Equations",

        question:
            "If y = 2x - 1, what is y when x = 5?",

        options: [
            "A. 8",
            "B. 9",
            "C. 10",
            "D. 11"
        ],

        answer: "B",

        explanation:
            "y = 2(5) - 1 = 9."
    },


    // ================= GRAPHING =================

    {
        topic: "Graphing",

        question:
            "Graph y = 3/2 x. Which pair of points lies on the line?",

        options: [
            "A. (2,3) and (4,6)",
            "B. (2,2) and (4,4)",
            "C. (1,3) and (2,6)",
            "D. (3,2) and (6,4)"
        ],

        answer: "A",

        explanation:
            "For y = 3/2x, x = 2 gives y = 3 and x = 4 gives y = 6."
    },


    {
        topic: "Graphing",

        question:
            "Graph y = -x + 3. Which point is on the line?",

        options: [
            "A. (0,3)",
            "B. (1,1)",
            "C. (2,2)",
            "D. (3,3)"
        ],

        answer: "A",

        explanation:
            "When x = 0, y = 3. Therefore (0,3) is on the line."
    },


    {
        topic: "Graphing",

        question:
            "Graph y = 2x + 1. Which point is on the line?",

        options: [
            "A. (1,2)",
            "B. (2,5)",
            "C. (3,5)",
            "D. (0,0)"
        ],

        answer: "B",

        explanation:
            "When x = 2, y = 2(2) + 1 = 5."
    }

];



/* CURRENT QUESTION */

let currentQuestion = 0;



/* CREATE QUESTIONS */

function createQuestions() {

    const container =
        document.getElementById("questions");

    container.innerHTML = "";


    questions.forEach((question, index) => {

        const number = index + 1;

        const card =
            document.createElement("section");

        card.className = "question-card";

        card.dataset.question = number;


        let html = `

            <div class="question-header">

                <span class="question-number">
                    Question ${number} of 30
                </span>

                <span class="topic">
                    ${question.topic}
                </span>

            </div>

            <div class="question-text">
                ${question.question}
            </div>

        `;


        /* GRAPH QUESTIONS */

        if (number >= 28) {

            html += `

                <div class="graph-instruction">

                    Click on points that lie on the line.

                    Select at least two points.

                </div>

                <div class="graph-area">

                    <canvas
                        id="graph${number}"
                        width="500"
                        height="500">
                    </canvas>

                </div>

                <div
                    class="selected-points"
                    id="points${number}">
                    Selected points: none
                </div>

            `;

        }


        /* ANSWERS */

        html += `<div class="options">`;


        question.options.forEach(option => {

            const letter =
                option.charAt(0);

            const text =
                option.substring(3);


            html += `

                <label class="option">

                    <input
                        type="radio"
                        name="question${number}"
                        value="${letter}">

                    <span>
                        <strong>${letter}.</strong>
                        ${text}
                    </span>

                </label>

            `;

        });


        html += `</div>`;


        /* BUTTONS */

        html += `

            <div class="action-buttons">

                <button
                    class="check-button"
                    onclick="checkCurrentQuestion()">

                    Check Answer

                </button>


                <button
                    class="clear-button"
                    onclick="clearCurrentQuestion()">

                    Clear

                </button>

            </div>


            <div
                class="answer-result"
                id="result${number}">
            </div>


            <div
                class="explanation"
                id="explanation${number}">

                <strong>Explanation:</strong>
                ${question.explanation}

            </div>

        `;


        card.innerHTML = html;

        container.appendChild(card);

    });

}



/* QUESTION NAVIGATION */

function createQuestionButtons() {

    const container =
        document.getElementById("questionButtons");


    questions.forEach((question, index) => {

        const button =
            document.createElement("button");

        button.className =
            "question-button";

        button.textContent =
            index + 1;


        button.onclick = function () {

            showQuestion(index);

        };


        container.appendChild(button);

    });

}



/* SHOW QUESTION */

function showQuestion(index) {

    if (index < 0) {
        index = 0;
    }


    if (index >= questions.length) {
        index = questions.length - 1;
    }


    currentQuestion = index;


    document
        .querySelectorAll(".question-card")
        .forEach(card => {

            card.classList.remove("active");

        });


    const card =
        document.querySelector(
            `[data-question="${index + 1}"]`
        );


    card.classList.add("active");


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Question ${index + 1} of 30`;


    updateNavigation();


    if (index >= 27) {

        drawGraph(index + 1);

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* NEXT */

function nextQuestion() {

    if (currentQuestion < 29) {

        showQuestion(currentQuestion + 1);

    }

}



/* PREVIOUS */

function previousQuestion() {

    if (currentQuestion > 0) {

        showQuestion(currentQuestion - 1);

    }

}



/* CHECK CURRENT */

function checkCurrentQuestion() {

    const number =
        currentQuestion + 1;


    /* GRAPH QUESTIONS */

    if (number >= 28) {

        checkGraph(number);

        return;

    }


    const selected =
        document.querySelector(
            `input[name="question${number}"]:checked`
        );


    const result =
        document.getElementById(
            `result${number}`
        );


    const explanation =
        document.getElementById(
            `explanation${number}`
        );


    if (!selected) {

        result.textContent =
            "Please select an answer.";

        result.className =
            "answer-result incorrect";

        explanation.style.display =
            "none";

        return;

    }


    if (
        selected.value ===
        questions[currentQuestion].answer
    ) {

        result.textContent =
            "✓ Correct!";

        result.className =
            "answer-result correct";

    } else {

        result.textContent =
            "✗ Incorrect. Try again.";

        result.className =
            "answer-result incorrect";

    }


    explanation.style.display =
        "block";


    updateNavigation();

}



/* CLEAR CURRENT */

function clearCurrentQuestion() {

    const number =
        currentQuestion + 1;


    if (number >= 28) {

        graphPoints[number] = [];

        drawGraph(number);

    }


    document
        .querySelectorAll(
            `input[name="question${number}"]`
        )
        .forEach(input => {

            input.checked = false;

        });


    document.getElementById(
        `result${number}`
    ).textContent = "";


    document.getElementById(
        `result${number}`
    ).className =
        "answer-result";


    document.getElementById(
        `explanation${number}`
    ).style.display =
        "none";


    updateNavigation();

}



/* PROGRESS */

function updateNavigation() {

    let answered = 0;


    for (
        let i = 1;
        i <= 27;
        i++
    ) {

        const selected =
            document.querySelector(
                `input[name="question${i}"]:checked`
            );


        if (selected) {

            answered++;

        }

    }


    for (let i = 28; i <= 30; i++) {

        if (
            graphPoints[i] &&
            graphPoints[i].length >= 2
        ) {

            answered++;

        }

    }


    document.getElementById(
        "progressText"
    ).textContent =
        `${answered} / 30 answered`;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${(answered / 30) * 100}%`;


    document
        .querySelectorAll(".question-button")
        .forEach((button, index) => {

            const number =
                index + 1;


            button.classList.toggle(
                "active",
                number === currentQuestion + 1
            );


            let isAnswered = false;


            if (number <= 27) {

                isAnswered =
                    !!document.querySelector(
                        `input[name="question${number}"]:checked`
                    );

            } else {

                isAnswered =
                    graphPoints[number] &&
                    graphPoints[number].length >= 2;

            }


            button.classList.toggle(
                "answered",
                isAnswered
            );

        });

}



/* SUBMIT TEST */

function submitTest() {

    let score = 0;


    for (
        let i = 0;
        i < 27;
        i++
    ) {

        const selected =
            document.querySelector(
                `input[name="question${i + 1}"]:checked`
            );


        if (
            selected &&
            selected.value ===
            questions[i].answer
        ) {

            score++;

        }

    }


    /* GRAPH QUESTIONS */

    for (let i = 28; i <= 30; i++) {

        if (graphIsCorrect(i)) {

            score++;

        }

    }


    document.getElementById(
        "finalScore"
    ).textContent =
        `Score: ${score} / 30`;


    if (score === 30) {

        document.getElementById(
            "finalMessage"
        ).textContent =
            "Excellent! All 30 questions are correct.";

    } else {

        document.getElementById(
            "finalMessage"
        ).textContent =
            `You got ${score} out of 30 correct. Review the questions and try again.`;

    }

}



/* CLEAR ALL */

function clearAll() {

    document
        .querySelectorAll(
            'input[type="radio"]'
        )
        .forEach(input => {

            input.checked = false;

        });


    for (let i = 28; i <= 30; i++) {

        graphPoints[i] = [];

    }


    document
        .querySelectorAll(".answer-result")
        .forEach(result => {

            result.textContent = "";

            result.className =
                "answer-result";

        });


    document
        .querySelectorAll(".explanation")
        .forEach(explanation => {

            explanation.style.display =
                "none";

        });


    document.getElementById(
        "finalScore"
    ).textContent =
        "Score: Not submitted";


    document.getElementById(
        "finalMessage"
    ).textContent =
        "Complete the test and submit when you are ready.";


    showQuestion(0);

}



/* =====================================================
   GRAPHING
   ===================================================== */


/*
   Graph points for questions 28-30
*/

const graphPoints = {

    28: [],

    29: [],

    30: []

};


/*
   Equation information
*/

const graphEquations = {

    28: {
        slope: 1.5,
        intercept: 0
    },

    29: {
        slope: -1,
        intercept: 3
    },

    30: {
        slope: 2,
        intercept: 1
    }

};



/* DRAW GRAPH */

function drawGraph(questionNumber) {

    const canvas =
        document.getElementById(
            `graph${questionNumber}`
        );


    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext("2d");


    const width =
        canvas.width;

    const height =
        canvas.height;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    const centerX = 250;

    const centerY = 250;

    const scale = 25;



    /* GRID */

    ctx.strokeStyle =
        "#dddddd";

    ctx.lineWidth = 1;


    for (
        let x = 0;
        x <= 500;
        x += scale
    ) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(x, 500);

        ctx.stroke();

    }


    for (
        let y = 0;
        y <= 500;
        y += scale
    ) {

        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(500, y);

        ctx.stroke();

    }



    /* AXES */

    ctx.strokeStyle =
        "#222";

    ctx.lineWidth = 2;


    ctx.beginPath();

    ctx.moveTo(
        0,
        centerY
    );

    ctx.lineTo(
        500,
        centerY
    );

    ctx.stroke();


    ctx.beginPath();

    ctx.moveTo(
        centerX,
        0
    );

    ctx.lineTo(
        centerX,
        500
    );

    ctx.stroke();



    /* NUMBERS */

    ctx.fillStyle =
        "#333";

    ctx.font =
        "12px Arial";


    for (
        let n = -10;
        n <= 10;
        n++
    ) {

        if (n === 0) {
            continue;
        }


        ctx.fillText(
            n,
            centerX + n * scale - 4,
            centerY + 16
        );


        ctx.fillText(
            n,
            centerX + 7,
            centerY - n * scale + 4
        );

    }


    ctx.font =
        "bold 14px Arial";


    ctx.fillText(
        "x",
        480,
        centerY - 8
    );


    ctx.fillText(
        "y",
        centerX + 8,
        15
    );



    /* SELECTED POINTS */

    graphPoints[
        questionNumber
    ].forEach(point => {

        const screenX =
            centerX +
            point.x * scale;


        const screenY =
            centerY -
            point.y * scale;


        ctx.beginPath();

        ctx.arc(
            screenX,
            screenY,
            6,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "#e53935";

        ctx.fill();


    });



    /* DISPLAY POINTS */

    const display =
        document.getElementById(
            `points${questionNumber}`
        );


    if (display) {

        if (
            graphPoints[
                questionNumber
            ].length === 0
        ) {

            display.textContent =
                "Selected points: none";

        } else {

            display.textContent =
                "Selected points: " +
                graphPoints[
                    questionNumber
                ]
                .map(
                    p => `(${p.x}, ${p.y})`
                )
                .join(", ");

        }

    }

}



/* ADD GRAPH POINT */

function addGraphPoint(
    questionNumber,
    event
) {

    const canvas =
        document.getElementById(
            `graph${questionNumber}`
        );


    const rect =
        canvas.getBoundingClientRect();


    const scale =
        25;


    const centerX =
        250;

    const centerY =
        250;


    const mouseX =
        (event.clientX - rect.left)
        *
        (canvas.width / rect.width);


    const mouseY =
        (event.clientY - rect.top)
        *
        (canvas.height / rect.height);


    const x =
        Math.round(
            (mouseX - centerX)
            / scale
        );


    const y =
        Math.round(
            (centerY - mouseY)
            / scale
        );


    if (
        x < -10 ||
        x > 10 ||
        y < -10 ||
        y > 10
    ) {

        return;

    }


    const exists =
        graphPoints[
            questionNumber
        ].some(
            point =>
                point.x === x &&
                point.y === y
        );


    if (!exists) {

        graphPoints[
            questionNumber
        ].push({
            x: x,
            y: y
        });

    }


    drawGraph(
        questionNumber
    );


    updateNavigation();

}



/* CHECK GRAPH */

function graphIsCorrect(
    questionNumber
) {

    const points =
        graphPoints[
            questionNumber
        ];


    if (
        !points ||
        points.length < 2
    ) {

        return false;

    }


    const equation =
        graphEquations[
            questionNumber
        ];


    return points.every(
        point => {

            const expectedY =
                equation.slope *
                point.x +
                equation.intercept;


            return (
                point.y ===
                expectedY
            );

        }
    );

}



/* CHECK GRAPH */

function checkGraph(
    questionNumber
) {

    const result =
        document.getElementById(
            `result${questionNumber}`
        );


    const explanation =
        document.getElementById(
            `explanation${questionNumber}`
        );


    if (
        graphPoints[
            questionNumber
        ].length < 2
    ) {

        result.textContent =
            "Please select at least two points.";

        result.className =
            "answer-result incorrect";

        return;

    }


    if (
        graphIsCorrect(
            questionNumber
        )
    ) {

        result.textContent =
            "✓ Correct! Your selected points are on the line.";

        result.className =
            "answer-result correct";

    } else {

        result.textContent =
            "✗ Incorrect. Select points that are on the line.";

        result.className =
            "answer-result incorrect";

    }


    explanation.style.display =
        "block";

}



/* GRAPH CLICK EVENTS */

document.addEventListener(
    "click",
    function(event) {

        const canvas =
            event.target;


        if (
            canvas.tagName !==
            "CANVAS"
        ) {

            return;

        }


        const id =
            canvas.id;


        if (
            !id.startsWith("graph")
        ) {

            return;

        }


        const questionNumber =
            Number(
                id.replace(
                    "graph",
                    ""
                )
            );


        addGraphPoint(
            questionNumber,
            event
        );

    }
);



/* RADIO CHANGE */

document.addEventListener(
    "change",
    function() {

        updateNavigation();

    }
);



/* START WEBSITE */

createQuestions();

createQuestionButtons();

showQuestion(0);

updateNavigation();
/* =====================================================
   GED MATHEMATICS TEST SETTINGS
   ===================================================== */

let currentQuestion = 0;

let submitted = false;

let timeLeft = 40;

let timerInterval;


/* =====================================================
   SHUFFLE FUNCTION
   ===================================================== */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

    return array;
}


/* =====================================================
   PREPARE QUESTIONS
   ===================================================== */

function prepareQuestions() {

    questions.forEach((question, index) => {

        /*
            Save original question number.
            This is useful for graph questions.
        */

        question.originalNumber =
            index + 1;


        /*
            Save graph ID before questions
            are shuffled.
        */

        if (
            question.topic === "Graphing"
        ) {

            question.graphId =
                index + 1;

        }


        /*
            Find the original correct answer.
        */

        const correctOption =
            question.options.find(
                option =>
                    option.charAt(0) ===
                    question.answer
            );


        /*
            Remove A., B., C., D.
        */

        question.options =
            question.options.map(
                option =>
                    option.substring(3)
            );


        /*
            Save correct answer text.
        */

        question.correctText =
            correctOption
                ? correctOption.substring(3)
                : "";


        /*
            Shuffle answer choices.
        */

        shuffleArray(
            question.options
        );


        /*
            Find new position of correct answer.
        */

        const correctIndex =
            question.options.findIndex(
                option =>
                    option ===
                    question.correctText
            );


        /*
            Change correct answer
            to new A/B/C/D position.
        */

        question.answer =
            String.fromCharCode(
                65 + correctIndex
            );

    });


    /*
        Shuffle the complete question order.
    */

    shuffleArray(questions);
}



/* =====================================================
   GRAPH POINTS
   ===================================================== */

const graphPoints = {};


/* Graph equations */

const graphEquations = {

    28: {
        slope: 1.5,
        intercept: 0
    },

    29: {
        slope: -1,
        intercept: 3
    },

    30: {
        slope: 2,
        intercept: 1
    }

};



/* =====================================================
   CREATE QUESTIONS
   ===================================================== */

function createQuestions() {

    const container =
        document.getElementById(
            "questions"
        );

    container.innerHTML = "";


    questions.forEach(
        (question, index) => {

            const number =
                index + 1;


            const card =
                document.createElement(
                    "section"
                );


            card.className =
                "question-card";


            card.dataset.question =
                number;


            let html = `

                <div class="question-header">

                    <span class="question-number">
                        Question ${number} of 30
                    </span>

                    <span class="topic">
                        ${question.topic}
                    </span>

                </div>


                <div class="question-text">

                    ${question.question}

                </div>

            `;


            /*
                GRAPH QUESTION
            */

            if (
                question.topic ===
                "Graphing"
            ) {

                graphPoints[number] =
                    [];


                html += `

                    <div class="graph-instruction">

                        Click on points that lie
                        on the line.

                        Select at least two points.

                    </div>


                    <div class="graph-area">

                        <canvas
                            id="graph${number}"
                            width="500"
                            height="500">
                        </canvas>

                    </div>


                    <div
                        class="selected-points"
                        id="points${number}">

                        Selected points: none

                    </div>

                `;

            }


            /*
                ANSWER OPTIONS
            */

            html += `
                <div class="options">
            `;


            question.options.forEach(
                (option, optionIndex) => {

                    const letter =
                        String.fromCharCode(
                            65 + optionIndex
                        );


                    html += `

                        <label class="option">

                            <input
                                type="radio"
                                name="question${number}"
                                value="${letter}">

                            <span>

                                <strong>
                                    ${letter}.
                                </strong>

                                ${option}

                            </span>

                        </label>

                    `;

                }
            );


            html += `
                </div>
            `;


            /*
                BUTTONS
            */

            html += `

                <div class="action-buttons">

                    <button
                        class="check-button"
                        onclick="checkCurrentQuestion()">

                        Check Answer

                    </button>


                    <button
                        class="clear-button"
                        onclick="clearCurrentQuestion()">

                        Clear

                    </button>

                </div>


                <div
                    class="answer-result"
                    id="result${number}">
                </div>


                <div
                    class="explanation"
                    id="explanation${number}">

                    <strong>
                        Explanation:
                    </strong>

                    ${question.explanation}

                </div>

            `;


            card.innerHTML =
                html;


            container.appendChild(
                card
            );

        }
    );

}



/* =====================================================
   QUESTION BUTTONS
   ===================================================== */

function createQuestionButtons() {

    const container =
        document.getElementById(
            "questionButtons"
        );


    container.innerHTML = "";


    questions.forEach(
        (question, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "question-button";


            button.textContent =
                index + 1;


            button.onclick =
                function() {

                    if (!submitted) {

                        showQuestion(index);

                    }

                };


            container.appendChild(
                button
            );

        }
    );

}



/* =====================================================
   SHOW QUESTION
   ===================================================== */

function showQuestion(index) {

    if (submitted) {
        return;
    }


    if (index < 0) {
        index = 0;
    }


    if (index >= questions.length) {
        index =
            questions.length - 1;
    }


    currentQuestion =
        index;


    document
        .querySelectorAll(
            ".question-card"
        )
        .forEach(card => {

            card.classList.remove(
                "active"
            );

        });


    const card =
        document.querySelector(
            `[data-question="${index + 1}"]`
        );


    if (card) {

        card.classList.add(
            "active"
        );

    }


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Question ${index + 1} of 30`;


    updateNavigation();


    /*
        Draw graph if this is
        a graph question.
    */

    if (
        questions[index].topic ===
        "Graphing"
    ) {

        drawGraph(
            index + 1
        );

    }

}



/* =====================================================
   NEXT
   ===================================================== */

function nextQuestion() {

    if (submitted) {
        return;
    }


    if (
        currentQuestion <
        questions.length - 1
    ) {

        showQuestion(
            currentQuestion + 1
        );

    }

}



/* =====================================================
   PREVIOUS
   ===================================================== */

function previousQuestion() {

    if (submitted) {
        return;
    }


    if (
        currentQuestion > 0
    ) {

        showQuestion(
            currentQuestion - 1
        );

    }

}



/* =====================================================
   CHECK ANSWER
   ===================================================== */

function checkCurrentQuestion() {

    if (submitted) {
        return;
    }


    const number =
        currentQuestion + 1;


    const question =
        questions[
            currentQuestion
        ];


    /*
        GRAPH QUESTION
    */

    if (
        question.topic ===
        "Graphing"
    ) {

        checkGraph(
            number
        );

        return;

    }


    const selected =
        document.querySelector(
            `input[name="question${number}"]:checked`
        );


    const result =
        document.getElementById(
            `result${number}`
        );


    const explanation =
        document.getElementById(
            `explanation${number}`
        );


    if (!selected) {

        result.textContent =
            "Please select an answer.";


        result.className =
            "answer-result incorrect";


        return;

    }


    if (
        selected.value ===
        question.answer
    ) {

        result.textContent =
            "✓ Correct!";


        result.className =
            "answer-result correct";

    } else {

        result.textContent =
            "✗ Incorrect. Try again.";


        result.className =
            "answer-result incorrect";

    }


    explanation.style.display =
        "block";


    updateNavigation();

}



/* =====================================================
   CLEAR QUESTION
   ===================================================== */

function clearCurrentQuestion() {

    if (submitted) {
        return;
    }


    const number =
        currentQuestion + 1;


    const question =
        questions[
            currentQuestion
        ];


    if (
        question.topic ===
        "Graphing"
    ) {

        graphPoints[number] =
            [];


        drawGraph(number);

    }


    document
        .querySelectorAll(
            `input[name="question${number}"]`
        )
        .forEach(
            input => {

                input.checked =
                    false;

            }
        );


    document.getElementById(
        `result${number}`
    ).textContent =
        "";


    document.getElementById(
        `result${number}`
    ).className =
        "answer-result";


    document.getElementById(
        `explanation${number}`
    ).style.display =
        "none";


    updateNavigation();

}



/* =====================================================
   PROGRESS
   ===================================================== */

function updateNavigation() {

    let answered = 0;


    questions.forEach(
        (question, index) => {

            const number =
                index + 1;


            if (
                question.topic ===
                "Graphing"
            ) {

                if (
                    graphPoints[number] &&
                    graphPoints[number]
                        .length >= 2
                ) {

                    answered++;

                }

            } else {

                const selected =
                    document.querySelector(
                        `input[name="question${number}"]:checked`
                    );


                if (selected) {

                    answered++;

                }

            }

        }
    );


    document.getElementById(
        "progressText"
    ).textContent =
        `${answered} / 30 answered`;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${answered / 30 * 100}%`;


    document
        .querySelectorAll(
            ".question-button"
        )
        .forEach(
            (button, index) => {

                const number =
                    index + 1;


                button.classList.toggle(
                    "active",
                    number ===
                    currentQuestion + 1
                );


                const question =
                    questions[index];


                let answeredQuestion =
                    false;


                if (
                    question.topic ===
                    "Graphing"
                ) {

                    answeredQuestion =
                        graphPoints[number] &&
                        graphPoints[number]
                            .length >= 2;

                } else {

                    answeredQuestion =
                        !!document.querySelector(
                            `input[name="question${number}"]:checked`
                        );

                }


                button.classList.toggle(
                    "answered",
                    answeredQuestion
                );

            }
    );

}



/* =====================================================
   ONE-TIME SUBMIT
   ===================================================== */

function submitTest() {

    /*
        IMPORTANT:
        If already submitted,
        do nothing.
    */

    if (submitted) {

        alert(
            "The test has already been submitted."
        );

        return;

    }


    submitted = true;


    clearInterval(
        timerInterval
    );


    let score = 0;


    questions.forEach(
        (question, index) => {

            const number =
                index + 1;


            /*
                GRAPH
            */

            if (
                question.topic ===
                "Graphing"
            ) {

                if (
                    graphIsCorrect(
                        number
                    )
                ) {

                    score++;

                }


                return;

            }


            /*
                MULTIPLE CHOICE
            */

            const selected =
                document.querySelector(
                    `input[name="question${number}"]:checked`
                );


            if (
                selected &&
                selected.value ===
                question.answer
            ) {

                score++;

            }

        }
    );


    /*
        SHOW RESULT
    */

    document.getElementById(
        "finalScore"
    ).textContent =
        `Final Score: ${score} / 30`;


    const percentage =
        Math.round(
            score / 30 * 100
        );


    document.getElementById(
        "finalMessage"
    ).textContent =
        `You scored ${percentage}%. The test is now closed.`;


    /*
        Disable everything.
    */

    document
        .querySelectorAll(
            "input"
        )
        .forEach(
            input => {

                input.disabled =
                    true;

            }
        );


    document
        .querySelectorAll(
            "button"
        )
        .forEach(
            button => {

                if (
                    !button.classList.contains(
                        "question-button"
                    )
                ) {

                    button.disabled =
                        true;

                }

            }
        );


    document
        .querySelectorAll(
            ".question-button"
        )
        .forEach(
            button => {

                button.disabled =
                    true;

            }
        );


    /*
        Show final result.
    */

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}



/* =====================================================
   TIMER
   ===================================================== */

function startTimer() {

    timeLeft = 40;


    const timer =
        document.getElementById(
            "timer"
        );


    timer.textContent =
        timeLeft;


    timerInterval =
        setInterval(
            function() {

                if (submitted) {

                    clearInterval(
                        timerInterval
                    );

                    return;

                }


                timeLeft--;


                timer.textContent =
                    timeLeft;


                /*
                    Warning when
                    10 seconds remain.
                */

                if (
                    timeLeft <= 10
                ) {

                    document
                        .querySelector(
                            ".timer-box"
                        )
                        .classList.add(
                            "timer-warning"
                        );

                }


                /*
                    TIME FINISHED
                */

                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    alert(
                        "Time is finished. Your test will be submitted automatically."
                    );


                    submitTest();

                }

            },
            1000
        );

}



/* =====================================================
   GRAPH FUNCTIONS
   ===================================================== */

function drawGraph(
    questionNumber
) {

    const canvas =
        document.getElementById(
            `graph${questionNumber}`
        );


    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext(
            "2d"
        );


    const centerX = 250;

    const centerY = 250;

    const scale = 25;


    ctx.clearRect(
        0,
        0,
        500,
        500
    );


    /*
        GRID
    */

    ctx.strokeStyle =
        "#dddddd";


    ctx.lineWidth = 1;


    for (
        let x = 0;
        x <= 500;
        x += scale
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x,
            0
        );

        ctx.lineTo(
            x,
            500
        );

        ctx.stroke();

    }


    for (
        let y = 0;
        y <= 500;
        y += scale
    ) {

        ctx.beginPath();

        ctx.moveTo(
            0,
            y
        );

        ctx.lineTo(
            500,
            y
        );

        ctx.stroke();

    }


    /*
        AXES
    */

    ctx.strokeStyle =
        "#222";


    ctx.lineWidth = 2;


    ctx.beginPath();

    ctx.moveTo(
        0,
        centerY
    );

    ctx.lineTo(
        500,
        centerY
    );

    ctx.stroke();


    ctx.beginPath();

    ctx.moveTo(
        centerX,
        0
    );

    ctx.lineTo(
        centerX,
        500
    );

    ctx.stroke();


    /*
        NUMBERS
    */

    ctx.fillStyle =
        "#333";


    ctx.font =
        "12px Arial";


    for (
        let n = -10;
        n <= 10;
        n++
    ) {

        if (n === 0) {
            continue;
        }


        ctx.fillText(
            n,
            centerX + n * scale - 4,
            centerY + 16
        );


        ctx.fillText(
            n,
            centerX + 7,
            centerY - n * scale + 4
        );

    }


    /*
        SELECTED POINTS
    */

    if (
        graphPoints[
            questionNumber
        ]
    ) {

        graphPoints[
            questionNumber
        ].forEach(
            point => {

                const screenX =
                    centerX +
                    point.x *
                    scale;


                const screenY =
                    centerY -
                    point.y *
                    scale;


                ctx.beginPath();


                ctx.arc(
                    screenX,
                    screenY,
                    6,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    "#e53935";


                ctx.fill();

            }
        );

    }


    /*
        POINT DISPLAY
    */

    const display =
        document.getElementById(
            `points${questionNumber}`
        );


    if (!display) {
        return;
    }


    if (
        !graphPoints[
            questionNumber
        ] ||
        graphPoints[
            questionNumber
        ].length === 0
    ) {

        display.textContent =
            "Selected points: none";

    } else {

        display.textContent =
            "Selected points: " +
            graphPoints[
                questionNumber
            ]
            .map(
                p =>
                    `(${p.x}, ${p.y})`
            )
            .join(", ");

    }

}



/* =====================================================
   GRAPH CLICK
   ===================================================== */

function addGraphPoint(
    questionNumber,
    event
) {

    if (submitted) {
        return;
    }


    const canvas =
        document.getElementById(
            `graph${questionNumber}`
        );


    const rect =
        canvas.getBoundingClientRect();


    const scale = 25;


    const centerX = 250;

    const centerY = 250;


    const mouseX =
        (event.clientX -
        rect.left) *
        (canvas.width /
        rect.width);


    const mouseY =
        (event.clientY -
        rect.top) *
        (canvas.height /
        rect.height);


    const x =
        Math.round(
            (mouseX - centerX) /
            scale
        );


    const y =
        Math.round(
            (centerY - mouseY) /
            scale
        );


    if (
        x < -10 ||
        x > 10 ||
        y < -10 ||
        y > 10
    ) {

        return;

    }


    if (
        !graphPoints[
            questionNumber
        ]
    ) {

        graphPoints[
            questionNumber
        ] = [];

    }


    const exists =
        graphPoints[
            questionNumber
        ].some(
            point =>
                point.x === x &&
                point.y === y
        );


    if (!exists) {

        graphPoints[
            questionNumber
        ].push({
            x: x,
            y: y
        });

    }


    drawGraph(
        questionNumber
    );


    updateNavigation();

}



/* =====================================================
   GRAPH CHECK
   ===================================================== */

function graphIsCorrect(
    questionNumber
) {

    const points =
        graphPoints[
            questionNumber
        ];


    if (
        !points ||
        points.length < 2
    ) {

        return false;

    }


    /*
        Find which original graph
        this shuffled question was.
    */

    const question =
        questions[
            questionNumber - 1
        ];


    const equation =
        graphEquations[
            question.graphId
        ];


    if (!equation) {
        return false;
    }


    return points.every(
        point => {

            const expectedY =
                equation.slope *
                point.x +
                equation.intercept;


            return (
                Math.abs(
                    point.y -
                    expectedY
                ) < 0.001
            );

        }
    );

}



/* =====================================================
   CHECK GRAPH
   ===================================================== */

function checkGraph(
    questionNumber
) {

    if (submitted) {
        return;
    }


    const result =
        document.getElementById(
            `result${questionNumber}`
        );


    const explanation =
        document.getElementById(
            `explanation${questionNumber}`
        );


    if (
        !graphPoints[
            questionNumber
        ] ||
        graphPoints[
            questionNumber
        ].length < 2
    ) {

        result.textContent =
            "Please select at least two points.";


        result.className =
            "answer-result incorrect";


        return;

    }


    if (
        graphIsCorrect(
            questionNumber
        )
    ) {

        result.textContent =
            "✓ Correct!";


        result.className =
            "answer-result correct";

    } else {

        result.textContent =
            "✗ Incorrect. Try again.";


        result.className =
            "answer-result incorrect";

    }


    explanation.style.display =
        "block";

}



/* =====================================================
   GRAPH CLICK EVENT
   ===================================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.tagName !==
            "CANVAS"
        ) {

            return;

        }


        if (
            !event.target.id.startsWith(
                "graph"
            )
        ) {

            return;

        }


        const number =
            Number(
                event.target.id.replace(
                    "graph",
                    ""
                )
            );


        addGraphPoint(
            number,
            event
        );

    }
);



/* =====================================================
   RADIO CHANGE
   ===================================================== */

document.addEventListener(
    "change",
    function() {

        if (!submitted) {

            updateNavigation();

        }

    }
);



/* =====================================================
   START TEST
   ===================================================== */

prepareQuestions();

createQuestions();

createQuestionButtons();

showQuestion(0);

updateNavigation();

startTimer();