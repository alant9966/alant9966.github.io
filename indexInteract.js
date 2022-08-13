function check(){
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_check');
    if(email1.value != email2.value){
        alert("Emails do not match.");
        return false;
    }
}

function openNav(){
  document.getElementById("mySidebar").style.width = "20%";
  document.getElementById("main").style.marginLeft = "20%";
}

function closeNav(){
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
