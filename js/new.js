

var emailStatus = true;
var phoneStatus = true;

function mainValidate(){
  var title=document.getElementById("titleSel").selectedIndex;
  var fname=document.forms['memberInfo']['firstName'].value;
  var sname=document.forms['memberInfo']['secondName'].value;
  var email=document.forms['memberInfo']['email'].value;
  var phone = document.forms['memberInfo']['phone'].value;
  
  if (document.getElementsByTagName("option")[title].value == "select"){
      document.getElementById('titleError').innerHTML='*дане поле обовязкове для заповнення';
      document.getElementById('titleSel').style.borderColor = "#EB4646";
      return false;
   }
   if (fname.length==0){
      document.getElementById('firstNameError').innerHTML='*дане поле обовязкове для заповнення';
      document.getElementById('firstName').style.borderColor = "#EB4646";
      return false;
   }
   
   if (sname.length==0){
      document.getElementById('secondNameError').innerHTML='*дане поле обовязкове для заповнення';
      document.getElementById('secondName').style.borderColor = "#EB4646";
      return false;
   }

   if (email.length==0){
      document.getElementById('emailError').innerHTML='*дане поле обовязкове для заповнення';
      document.getElementById('email').style.borderColor = "#EB4646";
      return false;
   }

  if (phone.length == 0){
      document.getElementById('phoneError').innerHTML='*дане поле обовязкове для заповнення';
      document.getElementById('phone').style.borderColor = "#EB4646";
      return false;
   }

   else if(emailStatus == false || phoneStatus == false){
      return false;
   }
}


function checkTitle(){
   var title=document.getElementById("titleSel").selectedIndex;
   var titleFild=document.getElementById("titleSel");
   if (document.getElementsByTagName("option")[title].value !== "select"){
      titleFild.style.borderColor = "green";
      document.getElementById('titleError').innerHTML='';
      return false;
   }
   else{
    titleFild.style.borderColor = "#EB4646";
      document.getElementById('titleError').innerHTML='*дане поле обовязкове для заповнення';
   }
}


function checkFirstName(){
  var fname = document.forms['memberInfo']['firstName'].value;
  if(fname.length != 0){
    document.getElementById('firstName').style.borderColor = "#00870A";
      document.getElementById('firstNameError').innerHTML='';
  }
  else if(fname.length == 0){
    document.getElementById('firstName').style.borderColor = "#EB4646";
      document.getElementById('firstNameError').innerHTML='*дане поле обовязкове для заповнення';
  }
}



function checkSecondName(){
  var sname = document.forms['memberInfo']['secondName'].value;
  if(sname.length != 0){
    document.getElementById('secondName').style.borderColor = "#00870A";
      document.getElementById('secondNameError').innerHTML='';
  }
  else if(sname.length == 0){
    document.getElementById('secondName').style.borderColor = "#EB4646";
      document.getElementById('secondNameError').innerHTML='*дане поле обовязкове для заповнення';
  }
}


function  checkEmail(){
    var emailFild = document.forms['memberInfo']['email'].value;
    var at = emailFild.indexOf("@");
    var dot = emailFild.indexOf(".");

     if(emailFild.length != 0 && at < 1 || dot < 1){
      document.getElementById('email').style.borderColor = "#EB4646";
      document.getElementById('emailError').innerHTML='*email введено не правильно';
     emailStatus = false;
     }
     
     else{
      document.getElementById('email').style.borderColor = "#00870A";
      document.getElementById('emailError').innerHTML='';
      emailStatus = true;
     }
   }



function checkPhone(){
  var phone = document.forms['memberInfo']['phone'].value;

       if (isNaN(phone) || phone.length != 10){
         document.getElementById('phone').style.borderColor = "#EB4646";
         document.getElementById('phoneError').innerHTML='*номер введено не правильно';
         phoneRes = false;
      }  
     
      else{
        document.getElementById('phone').style.borderColor = "#00870A";
         document.getElementById('phoneError').innerHTML='';
         phoneRes = true;
      }   
}







