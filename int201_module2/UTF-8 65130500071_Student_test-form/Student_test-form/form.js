//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500071      Name: Woranuch Naritnet

function init() {
  const btnShowForm = document.createElement("button");
  btnShowForm.textContent = "showForm";
  btnShowForm.addEventListener("click", showForm);

  const body = document.querySelector("body");
  body.appendChild(btnShowForm);
}

function showForm() {
  const element = document.querySelector("button");
  element.remove();

  const textInput = document.createElement("input");
  textInput.setAttribute("id", "textInput");
  textInput.textContent = "Enter text";

  const textArea = document.createElement("textarea");
  textArea.setAttribute("id", "teaxArae");
  textArea.textContent = "Enter more text";

  const divInput = document.createElement("div");
  divInput.setAttribute("id", "divInput");
  divInput.appendChild(textInput);

  const divTxetArea = document.createElement("div");
  divTxetArea.setAttribute("id", divTxetArea);
  divTxetArea.appendChild(textArea);

  const btnDisplay = document.createElement("button");
  btnDisplay.textContent = "Display";
  btnDisplay.addEventListener("click", display);

  const btnClear = document.createElement("button");
  btnClear.textContent = "Clear";
  btnClear.addEventListener("click", clear);

  const divDisplay = document.createElement("div");
  divDisplay.setAttribute("id", "displayArea");

  const body = document.querySelector("body");
  body.appendChild(divInput);
  body.appendChild(divTxetArea);
  body.appendChild(btnDisplay);
  body.appendChild(btnClear);
  body.appendChild(divDisplay);
}

function display() {
  const teaxArea = document.getElementById("textArea");
  const textInput = document.getElementById("textInput");

  const divDisplay = document.getElementById("displayArea");

  const h1 = document.createElement("h1");
  const p0 = document.createElement("p");

  h1.textContent = `${textInput}`;
  p0.textContent = `${teaxArea}`;

  divDisplay.appendChild(h1);
  divDisplay.appendChild(p0);

  if (teaxArea !== null && textInput !== null) {
    divDisplay.textContent;
  } else {
    const tagStyle = document.createElement("p");
    tagStyle.style = "color:red";
    tagStyle.textContent = "Error: Both input and textarea must contain text";
    divDisplay.appendChild(tagStyle);
  }
}

function clear() {
  const divDisplay = document.getElementById("displayArea");
  divDisplay.textContent = "";
}

init();
