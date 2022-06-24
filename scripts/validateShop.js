function validateForm(){
    var submit = true;
    // Validate name
    if (selectField[0].value == 0 && selectField[1].value == 0 && selectField[2].value == 0 && selectField[3].value == 0 && selectField[4].value == 0 && selectField[5].value == 0 && selectField[6].value == 0){
        alertSpan.innerText = 'Please select at lease one item.'
        submit = false;
    }

    

    if (submit == true){
        alert("Thank you");
    }
    
    return submit;
}

