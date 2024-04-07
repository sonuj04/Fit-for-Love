'use strict';

const calorieForm = document.getElementById("calorie-form");
const calorieSubmit = document.getElementById("calorie-submit");
calorieSubmit.addEventListener("click", function (event) {
    
    let bmr, need;
    const gender = document.getElementsByName("gender");
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("calorie-height").value);
    const weight = parseFloat(document.getElementById("calorie-weight").value);
    const activity = document.getElementById("activity").selectedIndex;
  
    
    if (age <= 80 && age >= 15 && height > 0 && weight > 0) {
      
      if (gender[0].checked) {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      }
      
      else if (gender[1].checked) {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
      }
      
      else {
        alert("Please enter a valid input!");
        return;
      }
      if (activity == 0) need = bmr;
      else if (activity == 1) need = bmr * 1.2;
      else if (activity == 2) need = bmr * 1.465;
      else if (activity == 3) need = bmr * 1.375;
      else if (activity == 4) need = bmr * 1.55;
      else if (activity == 5) need = bmr * 1.725;
      else need = bmr * 1.9;
  
      document.getElementById("calorie-result").innerHTML = "YOUR CALORIE NEEDING = " + Math.round(need) + " cal/day";
    }
    
    else
      alert("Please enter a valid input!");
  });











const bmiForm = document.getElementById("bmi-form");
const bmiSubmit = document.getElementById("bmi-submit");
bmiSubmit.addEventListener("click", function (event) {
    const height = parseFloat(document.getElementById("bmi-height").value) / 100;
    const weight = parseFloat(document.getElementById("bmi-weight").value);
    const result = weight / (height * height);
  
    if (!isNaN(result) && result > 0) {
      if (result < 18.5)
        document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Underweight)";
      else if (result < 24.9)
        document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Normal weight)";
      else
        document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Overweight)";
    }
    else {
      alert("Please enter a valid input!");
    }
  });







const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}







const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);








const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});







const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for (let i = 0; i < sections.length; i++) {

    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }

  }
}

reveal();
addEventOnElem(window, "scroll", reveal);


// Exercise Guide:

const showExercise = document.getElementById("show-exercise");
const exerciseSelect = document.getElementById("exercise-select");
const exercisePic = document.getElementById("exercise-pic");


// Exercise Guide:
showExercise.addEventListener("click", function (event) {
  console.log('fsknmfknW')
  const select = exerciseSelect.value;
  console.log(select);
  if (select != "none"){
    exercisePic.src = "assets/exercises/" + select + ".svg";
    exercisePic.style = "background: #EBEBEB; padding: 2rem; border-radius: 16px; box-shadow: 0 0 4px #000";
  }
});
// *********