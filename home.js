function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value; 
var rpassword=document.myform.rpassword.value; 
var mobile=document.myform.mobile.value;
var address=document.myform.address.value;
var email=document.myform.email.value;

if (name==null || name==""){  
  alert("By what name we should call you ?");
  return false;  
}else if(password.length<7){  
  alert("Password must be at least 7 characters long.");  
  return false;  

  } else if (password != rpassword){  
  alert("opps!!!..Passwords didn't match..");
  return false;  
}
  else if (mobile==null || mobile==""){  
  alert(" we need to talk over cell phone");
  return false;  
}

  else if(address==null||address=="")
        {

          alert("We dont know where you live");
          return false;

        }

 else if(email==null||email=="")
        {

          alert("We need you're email address ");
          return false;

        }

}
