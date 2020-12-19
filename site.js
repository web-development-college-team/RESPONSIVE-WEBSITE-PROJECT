let questions = [
  {
    id: 1,
    question: " What are the main features of Java?",
    answer: "Platform Independent",
    options: [
      "Memory Management.",
      "Platform Independent",
      "Platform dependent",
      "None of these"

    ]
  },
  {
    id: 2,
    question: "An expression involving byte, int, and literal numbers is promoted to which of these?",
    answer: "int",
    options: [
      "int",
      "byte",
      "float",
      "long"
    ]
  },
  {
    id: 3,
    question: "Which data type value is returned by all transcendental math functions?",
    answer: "double",
    options: [
      "int",
      "double",
      "float",
      "long"
    ]
  },

  {
    id: 4,
    question: "Decrement operator, −−, decreases the value of variable by what number?",
    answer: "1",
    options: [
      "2",
      "0",
      "1",
      "3"
    ]
  },
  {
    id: 5,
    question: "Which of these statements are incorrect?",
    answer: "None of the mentioned",
    options: [
      "Assignment operators run faster than their equivalent long forms",
      " Assignment operators are more efficiently implemented by Java run-time system than their equivalent long forms",
      " Assignment operators can be used only with numeric and character data type",
      "None of the mentioned"
    ]
  },
  {
    id: 6,
    question: "Which of these selection statements test only for equality?",
    answer: "if",
    options: [
      "if & switch",
      "switch",
      "if",
      "none of the mentioned"
    ]
  },
  {
    id: 7,
    question: "Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?",
    answer: "do-while",
    options: [
      "do-while",
      "while",
      "for",
      "none of the mentioned"
    ]
  },
  {
    id: 8,
    question: "Which of these jump statements can skip processing the remainder of the code in its body for a particular iteration?",
    answer: "continue",
    options: [
      "break",
      "return",
      "exit",
      "continue"
    ]
  },
  {
    id: 9,
    question: " What is the process of defining more than one method in a class differentiated by method signature?",
    answer: " Function overloading",
    options: [
      " Function overriding",
      " Function overloading",
      "Function doubling",
      "None of the mentioned"
    ]
  },
  {
    id: 10,
    question: "Which of the following is a method having same name as that of it’s class?",
    answer: " constructor",
    options: [
      "finalize",
      "delete",
      "class",
      " constructor"
    ]
  }


];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
  <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
 </ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}