const firstName = document.querySelectorAll(".fName");
const lastName = document.querySelectorAll(".lName");
const mode = document.querySelectorAll(".mode");

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


function checkCookie() {
    let fName = getCookie("fName");
    let lName = getCookie("lName");
    if (fName != "" && lName != "") {
        firstName[0].innerText = fName;
        lastName[0].innerText = lName;
    } else {
        fName = prompt("Please enter your first name:", "");
        if (fName != "" && fName != null) {
            setCookie("fName", fName, 365);
            firstName[0].innerText = fName;
        }
        lName = prompt("Please enter your last name:", "");
        if (lName != "" && lName != null) {
        setCookie("lName", lName, 365);
        lastName[0].innerText = lName;
      }
    }
  }


checkCookie();

