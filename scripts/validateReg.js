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
        spanField[2].innerText = 'Please input phone.'
        submit = false;
    }
    if (!inputField[3].value){
        spanField[3].innerText = 'Please input email.'
        submit = false;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField[3].value))){
        spanField[3].innerText = 'Incorrect email address format.';
        submit = false;
    }
    if (selectField[0].value == 0){
        spanField[4].innerText = 'Please select a workshop.'
        submit = false;
    }
    if (selectField[1].value == 0){
        spanField[5].innerText = 'Please select number of participant.'
        submit = false;
    }
    const selectedDate = new Date(inputField[4].value);
    if (!inputField[4].value){
        spanField[6].innerText = 'Please select a date.'
        submit = false;
    } else if ((selectedDate.getDay() == 5 || selectedDate.getDay() == 6) && selectField[0].value == "workshop1"){
        if (selectedDate.getDay() == 5){
            spanField[6].innerText = 'No class for workshop 1 on Sat.';
            submit = false;
        } else{
            spanField[6].innerText = 'No class for workshop 1 on Sun.';
            submit = false;
        }
    } else if ((selectedDate.getDay() == 0 || selectedDate.getDay() == 1 || selectedDate.getDay() == 6) && selectField[0].value == "workshop2"){
        if (selectedDate.getDay() == 0){
            spanField[6].innerText = 'No class for workshop 1 on Mon.';
            submit = false;
        } else if (selectedDate.getDay() == 1){
            spanField[6].innerText = 'No class for workshop 1 on Tue.';
            submit = false;
        } else{
            spanField[6].innerText = 'No class for workshop 1 on Sun.';
            submit = false;
        }
    } 


    if (submit == true){
        alert("Thank you");
    }
    
    return submit;
}