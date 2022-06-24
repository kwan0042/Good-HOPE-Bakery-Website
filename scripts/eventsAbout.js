// create constant variable for html elements
const inputField = document.querySelectorAll("input");
const spanField = document.querySelectorAll("span");

// create listener
inputField[0].addEventListener("input", fNameInput);
inputField[1].addEventListener("input", lNameInput);
inputField[2].addEventListener("input", emailInput);
inputField[3].addEventListener("input", subjectInput);
inputField[4].addEventListener("input", messageInput);

// event handler function
function fNameInput(){
    spanField[0].innerText = '';
}
function lNameInput(){
    spanField[1].innerText = '';
}
function emailInput(){
    spanField[2].innerText = '';
}
function subjectInput(){
    spanField[3].innerText = '';
}
function messageInput(){
    spanField[4].innerText = '';
}

//autofill from cookies
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function autoFill() {
    let fName = getCookie("fName");
    let lName = getCookie("lName");
    if (fName != "" && lName != "") {
        inputField[0].value = fName;
        inputField[1].value = lName;
    }
    else{
    }
}

autoFill();

