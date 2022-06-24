const dkMode = document.querySelectorAll(".mode");
var element = document.getElementById("mainMode");
dkMode[0].addEventListener("click",changeMode);

function changeMode() {
  element.classList.toggle("dark-mode");
  if (currentMode == "day"){
    setCookie("mode", "night", 365);
    currentMode = "night";
  }else{
    setCookie("mode", "day", 365);
    currentMode = "day";
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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


function checkMode() {
  let thisMode = getCookie("mode");
  if (thisMode != "") {
    // alert(thisMode);
    currentMode = thisMode;
    if (thisMode == 'night')
    element.classList.toggle("dark-mode");
  } else {
      setCookie("mode", "day", 365);
  }
}

var currentMode = "day";
checkMode();