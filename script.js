// -----------------------------
// SECTION SHOW / HIDE
// -----------------------------
function showSection(sectionId) {
  let sections = document.querySelectorAll(".section");

  sections.forEach(function (section) {
    section.classList.add("hidden");
  });

  document.getElementById(sectionId).classList.remove("hidden");
}

// -----------------------------
// STANDARD CALCULATOR
// -----------------------------
function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let display = document.getElementById("display");

  if (display.value.trim() === "") {
    display.value = "Error: Empty input";
    return;
  }

  let expression = display.value;

  // Input validation
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
    display.value = "Invalid Input";
    return;
  }

  try {
    let answer = eval(expression);

    display.value = answer;

    // Save complete calculation
    addHistory(expression + " = " + answer);

  } catch (error) {
    display.value = "Error: Invalid expression";
  }
}
function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// -----------------------------
// PERCENTAGE CALCULATOR
// -----------------------------
function calculatePercentage() {
  let obtained = parseFloat(document.getElementById("obtained").value);
  let total = parseFloat(document.getElementById("total").value);
  const result = document.getElementById("percentageResult");

  if (isNaN(obtained) || isNaN(total)) {
    result.innerHTML = "Error: Please enter both obtained marks and total marks.";
    return;
  }

  if (obtained < 0 || total <= 0) {
    result.innerHTML = "Error: Marks cannot be negative and total marks must be greater than 0.";
    return;
  }

  if (obtained > total) {
    result.innerHTML = "Error: Obtained marks cannot be greater than total marks.";
    return;
  }

  let percentage = (obtained / total) * 100;
  result.innerHTML = "Percentage = " + percentage.toFixed(2) + "%";
  addHistory(

"Percentage : "

+

percentage.toFixed(2)

+

"%"

);

}

function resetPercentage() {
  document.getElementById("obtained").value = "";
  document.getElementById("total").value = "";
  document.getElementById("percentageResult").innerHTML = "";
}

function moveNext(event, nextId) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById(nextId).focus();
  }
}

function handleLastEnter(event, type) {
  if (event.key === "Enter") {
    event.preventDefault();

    if (type === "percentage") {
      calculatePercentage();
    } else if (type === "cgpa") {
      calculateCGPA();
    } else if (type === "si") {
      calculateSI();
    } else if (type === "bmi") {
      calculateBMI();
    }
  }
}


// -----------------------------
// CGPA CALCULATOR
// -----------------------------
function calculateCGPA() {
  let g1 = parseFloat(document.getElementById("g1").value);
  let g2 = parseFloat(document.getElementById("g2").value);
  let g3 = parseFloat(document.getElementById("g3").value);
  let g4 = parseFloat(document.getElementById("g4").value);
  let g5 = parseFloat(document.getElementById("g5").value);

  const  result = document.getElementById("cgpaResult");

  if (isNaN(g1) || isNaN(g2) || isNaN(g3) || isNaN(g4) || isNaN(g5)) {
    result.innerHTML = "Error: Please enter all 5 grade points.";
    return;
  }

  if (
    g1 < 0 || g2 < 0 || g3 < 0 || g4 < 0 || g5 < 0 ||
    g1 > 10 || g2 > 10 || g3 > 10 || g4 > 10 || g5 > 10
  ) {
    result.innerHTML = "Error: Grade points must be between 0 and 10.";
    return;
  }

  const  cgpa = (g1 + g2 + g3 + g4 + g5) / 5;
  result.innerHTML = "CGPA = " + cgpa.toFixed(2);
  addHistory(

"CGPA : "

+

cgpa.toFixed(2)

);

}
function resetCGPA() {
  document.getElementById("g1").value = "";
  document.getElementById("g2").value = "";
  document.getElementById("g3").value = "";
  document.getElementById("g4").value = "";
  document.getElementById("g5").value = "";
  document.getElementById("cgpaResult").innerHTML = "";
}

// -----------------------------
// SIMPLE INTEREST CALCULATOR
// -----------------------------
function calculateSI() {
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let time = parseFloat(document.getElementById("time").value);

  let result = document.getElementById("siResult");

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    result.innerHTML = "Error: Please enter principal, rate, and time.";
    return;
  }

  if (principal <= 0 || rate <= 0 || time <= 0) {
    result.innerHTML = "Error: Principal, rate, and time must be greater than 0.";
    return;
  }

  const  si = (principal * rate * time) / 100;
  result.innerHTML = "Simple Interest = " + si.toFixed(2);
}

function resetSI() {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("time").value = "";
  document.getElementById("siResult").innerHTML = "";
}

// -----------------------------
// AGE CALCULATOR
// -----------------------------
function calculateAge() {
  let dob = document.getElementById("dob").value;
  let result = document.getElementById("ageResult");

  if (dob === "") {
    result.innerHTML = "Error: Please select your date of birth.";
    return;
  }

  let birthDate = new Date(dob);
  let today = new Date();

  if (birthDate > today) {
    result.innerHTML = "Error: Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML =
    "Your age is " + years + " years, " + months + " months, " + days + " days.";
    addHistory(

"Age : "

+

years

+

" Years "

+

months

+

" Months"

);

}

// -----------------------------
// BMI CALCULATOR
// -----------------------------
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let result = document.getElementById("bmiResult");

  if (isNaN(weight) || isNaN(height)) {
    result.innerHTML = "Error: Please enter both weight and height.";
    return;
  }

  if (weight <= 0 || height <= 0) {
    result.innerHTML = "Error: Weight and height must be greater than 0.";
    return;
  }

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.innerHTML = "BMI = " + bmi.toFixed(2) + " (" + category + ")";
  addHistory(

"BMI : "

+

bmi.toFixed(2)

+

" "

+

category

);

}
function resetBMI() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmiResult").innerHTML = "";
}
// -----------------------------
// STANDARD CALCULATOR KEYBOARD SUPPORT
// -----------------------------
document.addEventListener("keydown", function(event) {
  let key = event.key;

  // Standard calculator visible hai ya nahi check
  let standardSection = document.getElementById("standard");
  if (standardSection.classList.contains("hidden")) {
    return;
  }

  // Numbers aur operators allow
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    appendValue(key);
  }

  // Enter = calculate
  else if (key === "Enter") {
    event.preventDefault();
    calculateResult();
  }

  // Backspace = last character delete
  else if (key === "Backspace") {
    event.preventDefault();
    backspace();
  }

  // Escape = clear display
  else if (key === "Escape") {
    clearDisplay();
  }
});
let history = [];


function addHistory(text){

history.push(text);

localStorage.setItem(

"history",

JSON.stringify(history)

);

displayHistory();

}


function displayHistory(){

let list = document.getElementById(

"historyList"

);

list.innerHTML="";


history.forEach(function(item){

let li=document.createElement(

"li"

);

li.textContent=item;

list.appendChild(li);

});

}


function clearHistory(){

history=[];

localStorage.removeItem(

"history"

);

displayHistory();

}



window.onload = function () {

    // Theme load
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
         themeBtn.textContent = "☀️";
    }

    // History load
    let saved = localStorage.getItem("history");

    if (saved) {
        history = JSON.parse(saved);
        displayHistory();
    }

};

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    }

});