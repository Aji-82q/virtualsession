let signpass = document.getElementById("signpass");
function execu(){
    if(signpass.value.length<=8){
        alert("Password is too short");
        return false;
    }
    else{
        return true;
    }
}