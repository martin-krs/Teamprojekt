let firstName;
let lastName;
let home;
let age;
let email;
let tele;
let degree;
let fachsemester;
let studiensemester;
let studyTime;
let personalAdvise;
let otherInfos1;
let otherInfos2;

let firstNameInput;
let lastNameInput;
let homeInput;
let ageInput;
let emailInput;
let teleInput;
let degreeInput;
let fachsemesterInput;
let studiensemesterInput;
let boxes1 = [];
let boxes2 = [];
let personalAdviseInput;
let otherInfos1Input;
let otherInfos2Input;

onload = (event) => {
  firstNameInput = document.getElementById('firstNameField');
  lastNameInput = document.getElementById('lastNameField');
  homeInput = document.getElementById('homeField');
  ageInput = document.getElementById('ageField');
  emailInput = document.getElementById('emailField');
  teleInput = document.getElementById('teleField');
  degreeInput = document.getElementById('degreeField');
  fachsemesterInput = document.getElementById('fachsemesterField');
  studiensemesterInput = document.getElementById('studiensemesterField');
  personalAdviseInput = document.getElementById('personalAdviseField');
  otherInfos1Input = document.getElementById('otherInfos1Field');
  otherInfos2Input = document.getElementById('otherInfos2Field');
}

function onChange() {
  firstName = firstNameInput.value;
  lastName = lastNameInput.value;
  home = homeInput.value;
  age = ageInput.value;
  email = emailInput.value;
  tele = teleInput.value;
  degree = degreeInput.value;
  fachsemester = fachsemesterInput.value;
  studiensemester = studiensemesterInput.value;

  studyTime = document.querySelector('input[name="options"]:checked').value;

  const checkboxes1 = document.querySelectorAll('input[name="boxes1"]');
  const num1 = checkboxes1.length;
  boxes1 = [];
  for (let i = 0; i < num1; i++) {
    if (checkboxes1[i].checked === true) {
      if (boxes1.indexOf(checkboxes1[i] !== -1)) {
        boxes1.push(checkboxes1[i].value);
      }
    }
  }

  personalAdvise = personalAdviseInput.value;
  otherInfos1 = otherInfos1Input.value;

  const checkboxes2 = document.querySelectorAll('input[name="boxes2"]');
  const num2 = checkboxes1.length;
  boxes2 = [];
  for (let i = 0; i < num2; i++) {
    if (checkboxes2[i].checked === true) {
      if (boxes2.indexOf(checkboxes2[i] !== -1)) {
        boxes2.push(checkboxes2[i].value);
      }
    }
  }
  if (boxes2.indexOf("Nichts davon") !== -1) {
    boxes2 = [];
    boxes2.push("Nichts davon");
  }

  otherInfos2 = otherInfos2Input.value;
}

function sendInfos() {
  console.log(firstName, lastName, home, age, email, tele, degree, fachsemester, studiensemester, studyTime, 
    boxes1, personalAdvise, otherInfos1, boxes2, otherInfos2);
  alert("Infos wurden abgeschickt.");
  // SQL-Querry hinzufügen
}

function sendProtokoll() {
  alert("Protokoll abgeschickt");
}