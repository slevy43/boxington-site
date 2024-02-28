// Team - fade
function fadeScroll() {
    var t = window.scrollY;    
    var teamFade = document.getElementById('team-fade');
        if (t > 1000) {
            teamFade.style.opacity = '1';
        } if (t > 2100) {
            teamFade.style.opacity = '0';
        }
    var productFade = document.getElementById('product-fade');
        if (t > 2900) {
            productFade.style.opacity = '1';
        } if (t > 5100) {
            productFade.style.opacity = '0';
        }
    var cont1Fade = document.getElementById('contact1-fade');
        if (t > 4500) {
            cont1Fade.style.opacity = '1';
        } 
    
    var cont2Fade = document.getElementById('contact2-fade');
        if (t > 4650) {
            cont2Fade.style.opacity = '1';
        }   
}

// Parallax
function parallaxScroll() {
    var t = window.scrollY;
    var para = document.getElementById('para');
    var m = -0.25;
    var b = 0;

    var newY = m*t + b;
    para.style.backgroundPositionY = newY + "px";
}


//Form validation
function checkName() {
    var namebox = document.getElementById("name-form");
    var name = namebox.value;
    var allLetters = /^[A-Za-z]+$/;
    
    if(!(name.match(allLetters))) {
        namebox.style.borderColor = "red";
        return false
    }
        
    if (name.length > 4) {
        // Validt
        namebox.style.borderColor = "green";
        return true
    } else {
        // Invalid
        namebox.style.borderColor = "red";
        return false
    }
       
} // checkName end
    
function checkMsg() {
    var msgbox = document.getElementById("msg-form");
    var msg = msgbox.value;
    if (msg.length > 10 && msg.length < 30) {
        // Valid
        msgbox.style.borderColor = "green";
        return true;

    } else {
        // Invalid
        msgbox.style.borderColor = "red";
        return false;
    }
}

function checkNumber() {    
    var phonebox = document.getElementById("phone-form");
    var phonevalue = phonebox.value;
    var pattern = /^(\d){3}\s(\d){3}\s(\d){4}$/

    if (pattern.test(phonevalue)) {
        // Valid pattern
        phonebox.style.borderColor = "green";
        return true
    } else {
        phonebox.style.borderColor = "red";
        return false
    }
}

function checkReason() {
    var reason = document.getElementById("reason-form");
    var id = document.getElementById("id-fade");
    var options = reason.options;
    var chosenIndex = reason.selectedIndex;
    var chosenOption = options[chosenIndex];
    
    if (chosenOption.index == 3) {
        // Product ID was chosen
        id.style.opacity = '1';
        reason.style.borderColor = "green";
        return true
    } else if (chosenOption.index == 0) {
        // ... option
        id.style.opacity = '0';
        reason.style.borderColor = "red";
        return true
    } else if (chosenOption.index == 1) {
        // Normal option
        id.style.opacity = '0';
        reason.style.borderColor = "green";
        return false
    } else if (chosenOption.index == 2) {
        // Normal option
        id.style.opacity = '0';
        reason.style.borderColor = "green";
        return false
    } else if (chosenOption.index == 4) {
        // Normal option
        id.style.opacity = '0';
        reason.style.borderColor = "green";
        return false
    } else if (chosenOption.index == 5) {
        // Normal option
        id.style.opacity = '0';
        reason.style.borderColor = "green";
        return false
    } 
}

function checkId() {
    var idbox = document.getElementById("id-form");
    var idvalue = idbox.value;

    if (idvalue == 'B01') {
        idbox.style.borderColor = "green";
        return true
    } else if (idvalue == 'B02') {
        idbox.style.borderColor = "green";
        return true
    } else if (idvalue == 'B03') {
        idbox.style.borderColor = "green";
        return true
    } else if (idvalue == 'B04') {
        idbox.style.borderColor = "green";
        return true
    } else if (idvalue == 'B05') {
        idbox.style.borderColor = "green";
        return true
    } else if (idvalue == 'B06') {
        idbox.style.borderColor = "green";
        return true
    } else {
        idbox.style.borderColor = "red";
        return false
    }
}

function checkSubmit() {
    var submitButton = document.getElementById("submit-button");

    if (checkName() == true && checkMsg() == true && checkNumber() == true && checkReason() == false) {
        submitButton.style.visibility = 'visible'
        submitButton.style.opacity = '1'
    } else if (checkName() == true && checkMsg() == true && checkNumber() == true && checkId() == true) {
        submitButton.style.visibility = 'visible'
        submitButton.style.opacity = '1'
    } else {
        submitButton.style.visibility = 'hidden'
        submitButton.style.opacity = '0'
    }
}


