// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  
  var strLength = window.prompt("How many characters would you like your password to contain?");

// Creating functions for all possible password options

// Option 1: lowercase only
function lowString() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}


// Option 2: lowercase, special char
function lowSpecString() {
  var chars = "abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}


// Option 3: lowercase, num char
function lowNumString() {
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 3: lowercase, num, spec char
function lowNumSpecString() {
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 4: uppercase only
function upperString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 5:  lower & uppercase 
function lowUpperString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 6: uppercase & num
function upperNumString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 7: uppercase & spec
function upperSpecString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 8: uppercase, num, & spec
function upperNumSpecString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 9: lower, uppercase & spec
function lowUpperSpecString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 10: uppercase, lower, num, 
function lowUpperNumString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Option 11: all
function allString() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomstring = '';
  for (var i=0; i<strLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}



// Creating logic to call the correct function when specific conditions are selected

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
      var password = lowString();
    }
     // Option 2
    else if (charSpec == true && charNum == false && charLow== true && charUp == false){
      var password = lowSpecString();
    }
     // Option 3
    else if (charSpec == false && charNum == true && charLow== true && charUp == false){
      var password = lowNumString();
    }
     // Option 4
    else if (charSpec == true && charNum == true && charLow== true && charUp == false){
      var password = lowNumSpecString();
    }
     // Option 5
    else if (charSpec == false && charNum == false && charLow== false && charUp == true){
      var password = upperString();
    }
     // Option 6
     else if (charSpec == false && charNum == false && charLow== true && charUp == true){
      var password = lowUpperString();
    }
     // Option 7
     else if (charSpec == false && charNum == true && charLow== false && charUp == true){
      var password = upperNumString();
    }
     // Option 8
     else if (charSpec == true && charNum == false && charLow== false && charUp == true){
      var password = upperSpecString();
    }
     // Option 9
     else if (charSpec == true && charNum == true && charLow== false && charUp == true){
      var password = upperNumSpecString();
    }
     // Option 10
     else if (charSpec == true && charNum == false && charLow== true && charUp == true){
      var password = lowUpperSpecString();
    }
     // Option 11
     else if (charSpec == false && charNum == true && charLow== true && charUp == true){
      var password = lowUpperNumString();
    }

     // Option 12
     else if (charSpec == true && charNum == true && charLow== true && charUp == true){
      var password = allString();
    }
    
    // Null
    else if (charSpec == false && charNum == false && charLow== false && charUp == false){
      alert("Please select at least one valid character type");
    }

    else if (charSpec == true && charNum == false && charLow== false && charUp == false){
      alert("Please select at least one valid character type");
    }

    else if (charSpec == false && charNum == true && charLow== false && charUp == false){
      alert("Please select at least one valid character type");
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    }
  
writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
