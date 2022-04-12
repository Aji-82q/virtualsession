let signemail = document.getElementById("signemail");
let error  = document.getElementById("error")
let signpass = document.getElementById("signpass")
function execu(){
    let regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2.3})?$/
    if(regexp.test(signemail.value)){
       error.innerHTML ="Valid";
       error.style.color ="green";
      return true;
    }
      else{
        error.innerHTML ="Invalid";
        error.style.color ="red";
        return false; 
        
    }
    
    
    }

   

    

    

 
