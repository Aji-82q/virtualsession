
 
let email = document.getElementById("email");

let pwd = document.getElementById("pwd");


function validate(){
  if(email.value.trim()==""){
alert("Email cannot be empty");
return false;
  }
  
    else if(pwd.value.trim()==""){
    alert("Password cannot be empty");
    return false;
  }
  else if(pwd.value.length<=5){
    alert("Password is short");
    pwd.style.border="2px solid red";
    return false;
  }
  else{
    return true;
    alert("Validation is proper");

  }

} 





 
