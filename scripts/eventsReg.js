// create constant variable for html elements
const inputField = document.querySelectorAll("input");
const selectField = document.querySelectorAll("select");
const spanField = document.querySelectorAll("span");

// create listener
inputField[0].addEventListener("input", fNameInput);
inputField[1].addEventListener("input", lNameInput);
inputField[2].addEventListener("input", phoneInput);
inputField[3].addEventListener("input", emailInput);
selectField[0].addEventListener("change", workshopInput);
selectField[1].addEventListener("change", participantInput);
inputField[4].addEventListener("input", dateInput);

// event handler function
function fNameInput(){
    spanField[0].innerText = '';
}
function lNameInput(){
    spanField[1].innerText = '';
}
function phoneInput(){  
    currInput = inputField[2].value;
    currInput = currInput.replace(/[^0-9]/g, '');
    let newValue;
    let middle = currInput.substr(3, 3);
    let end = currInput.substr(6, 4);
    let front = currInput.substr(0, 3);
    if (front.length < 3) {
      newValue = "(" + front;
    } else if ((front.length == 3) && (middle.length == 3)) {
      newValue = "(" + front + ")" + " " + middle + "-" + end;
    } else if ((front.length == 3) && (middle.length < 3)) {
      newValue = "(" + front + ")" + " " + middle;
    } 
    inputField[2].value = newValue;
    spanField[2].innerText = ''

}
function emailInput(){
    spanField[3].innerText = '';
}
function workshopInput(){
    spanField[4].innerText = '';
}
function participantInput(){
    spanField[5].innerText = '';
}
function dateInput(){
    spanField[6].innerText = '';
}

