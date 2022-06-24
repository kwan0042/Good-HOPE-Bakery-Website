function validateForm(){
    var submit = true;
    // Validate name
    if (!inputField[0].value){
        spanField[0].innerText = 'Please input first name.'
        submit = false;
    }

    if (!inputField[1].value){
        spanField[1].innerText = 'Please input last name.'
        submit = false;
    }

    if (!inputField[2].value){
        spanField[2].innerText = 'Please input email.'
        submit = false;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField[2].value))){
        spanField[2].innerText = 'Incorrect email address format.';
        submit = false;
    }

    if (!inputField[3].value){
        spanField[3].innerText = 'Please input subject.'
        submit = false;
    }

    if (!inputField[4].value){
        spanField[4].innerText = 'Please input message.'
        submit = false;
    }

    if (submit == true){
        alert("Thank you");
    }
    
    return submit;
}

