var em=document.getElementById("email")
var pwd=document.getElementById("password")
var num=document.getElementById("number")

var err1=document.getElementById("err1")
var err2=document.getElementById("err2")
var err3=document.getElementById("err3")

var regex=/^([A-Z a-z 0-9\-#_.]+)@([A-Z a-z 0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
    if (em.value==""){
       err1.innerText="field cannot be empty";
       err1.style.color="red"
        em.style.border="4px solid red";
        return false
    }
    else if(!regex.test(em.value)){
        err1.innerText="enter proper email";
       err1.style.color="red"
        em.style.border="4px solid red";
        return false
    }

    else{
        err1.innerText="";
        em.style.border="green"
        return true
    }
}


var regex=/^([A-Z a-z 0-9\-#_.])/
function validatepassword(){
    if (pwd.value==""){
        err2.innerText="field cannot be empty";
        err2.style.color="red"
         pwd.style.border="4px solid red";
         return false
     }
     else if(!regex.test(pwd.value)){
         err2.innerText="enter proper email";
        err2.style.color="red"
         pwd.style.border="4px solid red";
         return false
     } 
     else{
        err2.innerText="";
        pwd.style.border="green"
        return true
    }


}
function phonenumber(inputtxt)

{

  var phoneno = /^\d{10}$/;

  if(inputtxt.value.match(phoneno))

        {

      return true;

        }

      else

        {

        alert('message');

        return false;

        }

}