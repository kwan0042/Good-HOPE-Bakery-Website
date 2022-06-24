const regButton = document.querySelectorAll(".applyNow");
regButton[0].addEventListener("click",openLink);
regButton[1].addEventListener("click",openLink);

function openLink(){
    window.open("register.html");
}

