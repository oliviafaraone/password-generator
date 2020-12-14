// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var strLength = window.prompt("How many characters would you like your password to contain?");

// Option 1: lowercase only
function lowString() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}


// Option 2: lowercase, special char
function lowSpecString() {
  var chars = "abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}


// Option 3: lowercase, num char
function lowNumString() {
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 3: lowercase, num, spec char
function lowNumSpecString() {
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 4: uppercase only
function upperString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}


// Option 5:  lower & uppercase 
function lowUpperString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}


// Option 6: uppercase & num
function upperNumString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 7: uppercase & spec
function upperSpecString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 8: uppercase, num, & spec
function upperNumSpecString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 9: lower, uppercase & spec
function lowUpperSpecString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 10: uppercase, lower, num, 
function lowUpperNumString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}

// Option 11: all
function allString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  alert ("Random Password is " + randomstring);
}



// Write password to the #password input
function writePassword() {
  if (strLength > 7 && strLength < 129){
    var charSpec= window.confirm("Click OK to confirm using special characters.")
    var charNum= window.confirm("Click OK to confirm using numeric characters.")
    var charLow= window.confirm("Click OK to confirm using lowercase characters.")
    var charUp= window.confirm("Click OK to confirm using uppercase characters.")
  } else {
    alert ("Please choose a length 8-128.");
  };

  // Option 1
    if (charSpec == false && charNum == false && charLow== true && charUp == false){
      lowString();
    }
     // Option 2
    else if (charSpec == true && charNum == false && charLow== true && charUp == false){
      lowSpecString();
    }
     // Option 3
    else if (charSpec == false && charNum == true && charLow== true && charUp == false){
      lowNumString();
    }
     // Option 4
    else if (charSpec == true && charNum == true && charLow== true && charUp == false){
      lowNumSpecString();
    }
     // Option 5
    else if (charSpec == false && charNum == false && charLow== false && charUp == true){
      upperString();
    }
     // Option 6
     else if (charSpec == false && charNum == false && charLow== true && charUp == true){
      lowUpperString();
    }
     // Option 7
     else if (charSpec == false && charNum == true && charLow== false && charUp == true){
      upperNumString();
    }
     // Option 8
     else if (charSpec == true && charNum == false && charLow== false && charUp == true){
      upperSpecString();
    }
     // Option 9
     else if (charSpec == true && charNum == true && charLow== false && charUp == true){
      upperNumSpecString();
    }
     // Option 10
     else if (charSpec == true && charNum == false && charLow== true && charUp == true){
      lowUpperSpecString();
    }
     // Option 11
     else if (charSpec == false && charNum == true && charLow== true && charUp == true){
      lowUpperNumString();
    }

     // Option 12
     else if (charSpec == true && charNum == true && charLow== true && charUp == true){
      allString();
    }
    
    // Null
    else if (charSpec == false && charNum == false && charLow== false && charUp == false){
      alert("Please select at least one valid character type");
    }

    }
    








 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
