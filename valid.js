function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function showpassword(elemId)
{
  var x = document.getElementById(elemId);
  
  if (x.type == "password")
  {
    x.type = "text";
  } 
  else
  {
    x.type = "password";
  }
}

function validate()
{
var name = document.forms["ValidationForm"]["nameid"].value;
var username = document.forms["ValidationForm"]["username"].value;
var password = document.forms["ValidationForm"]["password"].value;
var cnfpassword = document.forms["ValidationForm"]["cnfpassword"].value;
var email = document.forms["ValidationForm"]["email"].value;
var mobile = document.forms["ValidationForm"]["mobile"].value;
var address = document.forms["ValidationForm"]["address"].value;

var nameErr = usernameErr = passwordErr = cnfpasswordErr = emailErr = mobileErr = addressErr =true;

if(name == "")
{
        printError("nameErr", "Please enter your name");
    } 
else 
{
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) 
{
            printError("nameErr", "Please enter a valid name");
        } 
else 
{
            printError("nameErr", "");
            nameErr = false;
        }
    }
if(username == "")
{
printError("usernameErr", "Please enter your username");
}
else
{
var regex = /^[A-Za-z0-9_]{3,20}$/;
if(regex.test(username) == false)
{
printError("usernameErr", "Username can only contain alphanumeric characters and underscore.");
}
else
{
printError("usernameErr", "");
            usernameErr = false;
}
}

if(password == "")
{
printError("passwordErr", "Please enter your password");
}
else
{
var regex = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
if(regex.test(password) == false)
{
printError("passwordErr", "Enter a valid password");
}
else
{
printError("passwordErr", "");
            passwordErr = false;
}
}

if(cnfpassword == "")
{
printError("cnfpasswordErr", "Please enter your password again here.");
}
else
{
if(cnfpassword != password)
{
printError("cnfpasswordErr", "Passwords do not match !!!");
}
else
{
printError("cnfpasswordErr", "");
            cnfpasswordErr = false;
}
}

if(email == "")
{
printError("emailErr", "Please enter your email address");
}
else
{
var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if(regex.test(email) == false)
{
printError("emailErr", "Enter a valid email address");
}
else
{
printError("emailErr", "");
            emailErr = false;
}
}

if(mobile == "")
{
        printError("mobileErr", "Please enter your mobile number");
    } 
else
{
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false)
{
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } 
else
{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

if(address == "")
{
printError("addressErr", "Please enter your address");
}
else
{
var regex = /^[A-Za-z0-9-/,;]{3,100}$/;
if(regex.test(address) == false)
{
printError("addressErr", "Please enter a valid address ");
}
else
{
printError("addressErr", "");
            addressErr = false;
}
}

if((nameErr  || usernameErr || passwordErr || cnfpasswordErr || emailErr || mobileErr  || addressErr) == true)
{
var btn = document.getElementById("btn");
document.getElementById("btn").value = "Catch Me";
btn.style.top = Math.floor((Math.random() * 230) + 1) + "px";
btn.style.left = Math.floor((Math.random() * 250) + 1) + "px";
document.getElementById("btn").focus();
return false;
}
else
{
return true;
}

}
