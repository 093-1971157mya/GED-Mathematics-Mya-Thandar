// =====================================================
// GED MATHEMATICS PRACTICE TEST
// 30 QUESTIONS
// 45 MINUTES
// SHUFFLE QUESTIONS + OPTIONS
// ONE-TIME SUBMISSION
// =====================================================

const questions = [

  // ================= FUNCTIONS =================

  {
    question: "If f(x) = 2x + 3, what is f(4)?",
    options: ["7", "9", "11", "12"],
    answer: "11"
  },

  {
    question: "If f(x) = x² - 4, what is f(3)?",
    options: ["3", "5", "9", "13"],
    answer: "5"
  },

  {
    question: "Which equation represents a function?",
    options: [
      "y = 2x + 1",
      "x = y²",
      "x² + y² = 25",
      "y² = x + 3"
    ],
    answer: "y = 2x + 1"
  },

  {
    question: "What is the domain of f(x) = 3x - 2?",
    options: [
      "All real numbers",
      "Only positive numbers",
      "Only integers",
      "x > 2"
    ],
    answer: "All real numbers"
  },

  {
    question: "If f(x) = 5x - 7, find f(2).",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },

  {
    question: "The table shows x = 1, 2, 3 and f(x) = 4, 7, 10. What is the rule?",
    options: [
      "f(x) = 2x + 2",
      "f(x) = 3x + 1",
      "f(x) = 4x",
      "f(x) = x + 3"
    ],
    answer: "f(x) = 3x + 1"
  },

  {
    question: "If f(x) = -2x + 8, what is f(5)?",
    options: ["-2", "-1", "2", "3"],
    answer: "-2"
  },

  {
    question: "Which value is the output when x = 6 for y = 4x - 5?",
    options: ["19", "20", "24", "29"],
    answer: "19"
  },

  {
    question: "If f(x) = x + 10 and f(x) = 17, what is x?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },

  {
    question: "Which ordered pair belongs to y = 2x - 1?",
    options: [
      "(1, 1)",
      "(2, 2)",
      "(3, 4)",
      "(4, 6)"
    ],
    answer: "(1, 1)"
  },

  // ================= LINEAR EQUATIONS =================

  {
    question: "Solve: 3x + 5 = 20",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },

  {
    question: "Solve: 5x - 10 = 25",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },

  {
    question: "Solve: 2x + 7 = x + 15",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },

  {
    question: "Solve: 4(x - 2) = 20",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },

  {
    question: "Solve: 7x + 3 = 45",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },

  {
    question: "Solve: 3(x + 4) = 24",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },

  {
    question: "A number increased by 12 equals 30. What is the number?",
    options: ["16", "17", "18", "19"],
    answer: "18"
  },

  {
    question: "Solve: 2x - 9 = 17",
    options: ["11", "12", "13", "14"],
    answer: "13"
  },

  {
    question: "Solve: 6x = 42",
    options: ["6", "7", "8", "9"],
    answer: "7"
  },

  {
    question: "A taxi charges $5 plus $2 per mile. Which equation represents the cost C for m miles?",
    options: [
      "C = 5m + 2",
      "C = 2m + 5",
      "C = 7m",
      "C = 5m - 2"
    ],
    answer: "C = 2m + 5"
  },

  // ================= GRAPHING =================

  {
    question: "What is the slope of the line shown?",
    graph: createGraph(1, 2),
    options: [
      "1/2",
      "1",
      "2",
      "3"
    ],
    answer: "2"
  },

  {
    question: "What is the y-intercept of y = 3x + 4?",
    options: ["3", "4", "-3", "-4"],
    answer: "4"
  },

  {
    question: "What is the slope of y = -2x + 5?",
    options: ["-5", "-2", "2", "5"],
    answer: "-2"
  },

  {
    question: "Which equation has a slope of 3 and a y-intercept of 2?",
    options: [
      "y = 2x + 3",
      "y = 3x + 2",
      "y = -3x + 2",
      "y = 3x - 2"
    ],
    answer: "y = 3x + 2"
  },

  {
    question: "Which point is on the graph of y = x + 3?",
    options: [
      "(1, 4)",
      "(2, 4)",
      "(3, 5)",
      "(4, 6)"
    ],
    answer: "(1, 4)"
  },

  {
    question: "A line rises 6 units and runs 3 units. What is its slope?",
    options: ["1", "2", "3", "6"],
    answer: "2"
  },

  {
    question: "What is the slope between (1, 2) and (3, 6)?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },

  {
    question: "Which line has a negative slope?",
    options: [
      "y = 2x + 1",
      "y = 4x - 3",
      "y = -x + 5",
      "y = 7x"
    ],
    answer: "y = -x + 5"
  },

  {
    question: "What is the x-intercept of y = x - 4?",
    options: ["-4", "0", "4", "8"],
    answer: "4"
  },

  {
    question: "Which equation represents a horizontal line?",
    options: [
      "y = 5",
      "x = 5",
      "y = x",
      "y = 5x"
    ],
    answer: "y = 5"
  }

];


// =====================================================
// GRAPH FUNCTION
// =====================================================

function createGraph(rise, run) {

  return `
  <svg class="graph"
       viewBox="0 0 500 300"
       xmlns="http://www.w3.org/2000/svg">

    <line x1="50" y1="250"
          x2="470" y2="250"
          stroke="black"/>

    <line x1="250" y1="20"
          x2="250" y2="280"
          stroke="black"/>

    <line x1="70" y1="210"
          x2="430" y2="70"
          stroke="blue"
          stroke-width="4"/>

    <text x="455" y="245">x</text>
    <text x="255" y="30">y</text>

    <text x="260" y="270">0</text>

    <circle cx="250"
            cy="140"
            r="5"
            fill="red"/>

    <circle cx="350"
            cy="90"
            r="5"
            fill="red"/>

  </svg>
  `;
}


// =====================================================
// SHUFFLE FUNCTION
// =====================================================

function shuffle(array) {

  let currentIndex = array.length;

  while (currentIndex !== 0) {

    let randomIndex =
      Math.floor(Math.random() * currentIndex);

    currentIndex--;

    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }

  return array;
}


// =====================================================
// START TEST
// =====================================================

let testQuestions = [];
let timeLeft = 45 * 60;
let timerInterval = null;
let submitted = false;

const startScreen =
  document.getElementById("start-screen");

const quizForm =
  document.getElementById("quizForm");

const submitArea =
  document.getElementById("submit-area");

const result =
  document.getElementById("result");

const timer =
  document.getElementById("timer");

const startBtn =
  document.getElementById("startBtn");

const submitBtn =
  document.getElementById("submitBtn");


// Hide test before starting

quizForm.style.display = "none";
submitArea.style.display = "none";


// =====================================================
// START BUTTON
// =====================================================

startBtn.addEventListener("click", function () {

  startScreen.style.display = "none";

  quizForm.style.display = "block";

  submitArea.style.display = "block";

  // Copy questions

  testQuestions = [...questions];

  // Shuffle questions

  shuffle(testQuestions);

  // Shuffle options

  testQuestions.forEach(q => {
    shuffle(q.options);
  });

  displayQuestions();

  startTimer();

});


// =====================================================
// DISPLAY QUESTIONS
// =====================================================

function displayQuestions() {

  quizForm.innerHTML = "";

  testQuestions.forEach((q, index) => {

    const questionDiv =
      document.createElement("div");

    questionDiv.className = "question";

    let html = `
      <h3>Question ${index + 1}</h3>
      <p>${q.question}</p>
    `;

    if (q.graph) {
      html += q.graph;
    }

    q.options.forEach((option, optionIndex) => {

      html += `
        <label class="option">
          <input
            type="radio"
            name="question${index}"
            value="${escapeHTML(option)}"
          >
          ${option}
        </label>
      `;

    });

    questionDiv.innerHTML = html;

    quizForm.appendChild(questionDiv);

  });

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(text) {

  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// =====================================================
// TIMER
// =====================================================

function startTimer() {

  timerInterval =
    setInterval(function () {

      if (timeLeft <= 0) {

        clearInterval(timerInterval);

        submitTest(true);

        return;
      }

      timeLeft--;

      updateTimer();

    }, 1000);

}


function updateTimer() {

  let minutes =
    Math.floor(timeLeft / 60);

  let seconds =
    timeLeft % 60;

  timer.textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  if (timeLeft <= 300) {
    timer.classList.add("danger");
  }

  else if (timeLeft <= 600) {
    timer.classList.add("warning");
  }

}


// =====================================================
// SUBMIT BUTTON
// =====================================================

submitBtn.addEventListener("click", function () {

  if (submitted) {
    return;
  }

  const confirmSubmit =
    confirm(
      "Are you sure you want to submit your test?"
    );

  if (confirmSubmit) {
    submitTest(false);
  }

});


// =====================================================
// SUBMIT TEST
// =====================================================

function submitTest(autoSubmit) {

  if (submitted) {
    return;
  }

  submitted = true;

  clearInterval(timerInterval);

  let score = 0;

  testQuestions.forEach((q, index) => {

    const selected =
      document.querySelector(
        `input[name="question${index}"]:checked`
      );

    if (selected &&
        selected.value === q.answer) {

      score++;

    }

  });

  const percentage =
    Math.round(
      (score / testQuestions.length) * 100
    );

  quizForm.querySelectorAll("input")
    .forEach(input => {
      input.disabled = true;
    });

  submitBtn.disabled = true;

  submitArea.style.display = "none";

  let message = "";

  if (percentage >= 80) {
    message = "Excellent work!";
  }

  else if (percentage >= 60) {
    message = "Good work. Keep practicing!";
  }

  else {
    message = "Keep practicing and review the questions.";
  }

  result.style.display = "block";

  result.innerHTML = `
    <h2>Test Complete</h2>

    <div class="score">
      ${score} / ${testQuestions.length}
    </div>

    <h3>${percentage}%</h3>

    <p>${message}</p>

    ${
      autoSubmit
      ? "<p><strong>Time expired. Your test was submitted automatically.</strong></p>"
      : "<p>Your test has been submitted.</p>"
    }
  `;

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });

}