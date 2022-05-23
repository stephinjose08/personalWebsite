var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");


function validateName(){
    var name=document.getElementById('contact-name').value;

   if (name.length == 0) {
       nameError.innerHTML='name is required';
       return false;
   }
   if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/) ) {

        nameError.innerHTML='write full name';
        return false;
   }
   nameError.innerHTML ="✅";
   return true;
  
}

function validatephone(){
    var phone=document.getElementById("phone-number").value;


   if (phone.length == 0) {
    phoneError.innerHTML='phone number is required';
       return false;
   }
   if (phone.length!==10) {

    phoneError.innerHTML='phone number should be 10 digits';
        return false;
   }
   if(!phone.match(/^[0-9]{10}$/)){
  
    phoneError.innerHTML='only digits please';
    return false;
   }
   phoneError.innerHTML ="✅";
   return true;
  
}
function validateEmail(){
    var Email=document.getElementById('email').value;

    if(Email.length==0){
       
        emailError.innerHTML='Email is required';
        return false;

}
if(!Email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
    
    
    emailError.innerHTML='Email invalid';
    
    return false;
}


emailError.innerHTML='✅';
return true;

}
function validateMessage(){
    var message=document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        
        messageError.innerHTML = left + 'More chatacters required';
        return false;
        

    }
 
    messageError.innerHTML='✅';
return true;
}
function validateForm(){
    if(!validateName()|| !validatephone()||  !validateEmail()|| !validateMessage()){

        submitError.style.display='block';
       
        submitError.innerHTML='please fix the error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
        submitError.innerHTML='✅ message send successful';
        
}
   


    
    
        
    
        
    