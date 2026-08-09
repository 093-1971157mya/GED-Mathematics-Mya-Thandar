// ========================================
// GED GRAPHING QUESTIONS
// ========================================

const questions = {

    1: {
        m: 3 / 2,
        b: 0
    },

    2: {
        m: 2,
        b: 1
    },

    3: {
        m: -1,
        b: 3
    }

};


// Store student's points

const studentPoints = {

    1: [],
    2: [],
    3: []

};


// ========================================
// GRAPH SETTINGS
// ========================================

const graphSize = 500;

const centerX = 250;
const centerY = 250;

const scale = 25;


// ========================================
// DRAW GRAPH
// ========================================

function drawGraph(questionNumber) {

    const canvas =
        document.getElementById(
            "graph" + questionNumber
        );

    const ctx =
        canvas.getContext("2d");


    ctx.clearRect(
        0,
        0,
        graphSize,
        graphSize
    );


    // ----------------------------
    // Grid
    // ----------------------------

    ctx.strokeStyle = "#dddddd";

    ctx.lineWidth = 1;


    for (
        let x = 0;
        x <= graphSize;
        x += scale
    ) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(
            x,
            graphSize
        );

        ctx.stroke();

    }


    for (
        let y = 0;
        y <= graphSize;
        y += scale
    ) {

        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(
            graphSize,
            y
        );

        ctx.stroke();

    }


    // ----------------------------
    // Axes
    // ----------------------------

    ctx.strokeStyle = "#222";

    ctx.lineWidth = 2;


    // X axis

    ctx.beginPath();

    ctx.moveTo(0, centerY);

    ctx.lineTo(
        graphSize,
        centerY
    );

    ctx.stroke();


    // Y axis

    ctx.beginPath();

    ctx.moveTo(centerX, 0);

    ctx.lineTo(
        centerX,
        graphSize
    );

    ctx.stroke();


    // ----------------------------
    // Numbers
    // ----------------------------

    ctx.fillStyle = "#333";

    ctx.font = "12px Arial";


    for (
        let x = -10;
        x <= 10;
        x++
    ) {

        if (x === 0) continue;


        const px =
            centerX + x * scale;


        ctx.fillText(
            x,
            px - 5,
            centerY + 15
        );

    }


    for (
        let y = -10;
        y <= 10;
        y++
    ) {

        if (y === 0) continue;


        const py =
            centerY - y * scale;


        ctx.fillText(
            y,
            centerX + 6,
            py + 4
        );

    }


    // Axis labels

    ctx.font = "bold 14px Arial";

    ctx.fillText(
        "x",
        480,
        centerY - 10
    );

    ctx.fillText(
        "y",
        centerX + 8,
        15
    );


    // Draw student's points

    drawStudentPoints(
        questionNumber
    );

}


// ========================================
// DRAW STUDENT POINTS
// ========================================

function drawStudentPoints(
    questionNumber
) {

    const canvas =
        document.getElementById(
            "graph" + questionNumber
        );

    const ctx =
        canvas.getContext("2d");


    studentPoints[
        questionNumber
    ].forEach(point => {

        const px =
            centerX +
            point.x * scale;


        const py =
            centerY -
            point.y * scale;


        ctx.beginPath();

        ctx.arc(
            px,
            py,
            6,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "#e53935";

        ctx.fill();


        ctx.strokeStyle =
            "white";

        ctx.lineWidth = 2;

        ctx.stroke();

    });

}


// ========================================
// CLICK ON GRAPH
// ========================================

function addPoint(
    questionNumber,
    event
) {

    const canvas =
        document.getElementById(
            "graph" + questionNumber
        );


    const rect =
        canvas.getBoundingClientRect();


    const mouseX =
        event.clientX -
        rect.left;


    const mouseY =
        event.clientY -
        rect.top;


    // Convert pixels to coordinates

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


    // Prevent duplicate points

    const alreadyExists =
        studentPoints[
            questionNumber
        ].some(
            point =>
                point.x === x &&
                point.y === y
        );


    if (alreadyExists) {
        return;
    }


    studentPoints[
        questionNumber
    ].push({
        x: x,
        y: y
    });


    drawGraph(
        questionNumber
    );

}


// ========================================
// CHECK ANSWER
// ========================================

function checkQuestion(
    questionNumber
) {

    const points =
        studentPoints[
            questionNumber
        ];


    const result =
        document.getElementById(
            "result" + questionNumber
        );


    if (points.length < 2) {

        result.textContent =
            "Please select at least two points.";

        result.className =
            "result wrong";

        return false;

    }


    const equation =
        questions[
            questionNumber
        ];


    let correct = true;


    for (const point of points) {

        const expectedY =
            equation.m *
            point.x +
            equation.b;


        if (
            Math.abs(
                point.y -
                expectedY
            ) > 0.0001
        ) {

            correct = false;

        }

    }


    if (correct) {

        result.textContent =
            "✓ Correct!";

        result.className =
            "result correct";

        return true;

    }


    result.textContent =
        "✗ Incorrect. Please try again.";

    result.className =
        "result wrong";

    return false;

}


// ========================================
// CLEAR GRAPH
// ========================================

function clearGraph(
    questionNumber
) {

    studentPoints[
        questionNumber
    ] = [];


    document.getElementById(
        "result" + questionNumber
    ).textContent = "";


    document.getElementById(
        "result" + questionNumber
    ).className =
        "result";


    drawGraph(
        questionNumber
    );

}


// ========================================
// SUBMIT TEST
// ========================================

function submitTest() {

    let score = 0;


    for (
        let question = 1;
        question <= 3;
        question++
    ) {

        if (
            checkQuestion(
                question
            )
        ) {

            score++;

        }

    }


    document.getElementById(
        "score"
    ).textContent =
        "Score: " +
        score +
        " / 3";


    if (score === 3) {

        document.getElementById(
            "final-message"
        ).textContent =
            "Excellent! All questions are correct.";

    } else {

        document.getElementById(
            "final-message"
        ).textContent =
            "Please review the incorrect questions and try again.";

    }

}


// ========================================
// START GRAPHS
// ========================================

drawGraph(1);
drawGraph(2);
drawGraph(3);


// Add click events

document
    .getElementById("graph1")
    .addEventListener(
        "click",
        event =>
            addPoint(1, event)
    );


document
    .getElementById("graph2")
    .addEventListener(
        "click",
        event =>
            addPoint(2, event)
    );


document
    .getElementById("graph3")
    .addEventListener(
        "click",
        event =>
            addPoint(3, event)
    );