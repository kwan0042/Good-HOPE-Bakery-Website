const selectField = document.querySelectorAll("select");
const inputField = document.querySelectorAll("input");
const alertSpan = document.getElementById("itemNumErr");
const price = document.querySelectorAll(".price");

selectField[0].addEventListener("input", selectChange);
selectField[1].addEventListener("input", selectChange);
selectField[2].addEventListener("input", selectChange);
selectField[3].addEventListener("input", selectChange);
selectField[4].addEventListener("input", selectChange);
selectField[5].addEventListener("input", selectChange);
selectField[6].addEventListener("input", selectChange);

function selectChange(){
    alertSpan.innerText = '';
    inputField[0].value = price[0].innerText * selectField[0].value + 
                            price[1].innerText * selectField[1].value + 
                            price[2].innerText * selectField[2].value + 
                            price[3].innerText * selectField[3].value + 
                            price[4].innerText * selectField[4].value + 
                            price[5].innerText * selectField[5].value + 
                            price[6].innerText * selectField[6].value;
}

