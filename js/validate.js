/*
Title: This file houses all the validation form
Author: Ebenezer Makinde
email: ebenezermakinde@gmail.com
*/

//Variable declaration.
 
 
function formReg(){
var yourname1 = document.getElementById('yourname').value,
	youremail = document.getElementById('youremail').value,
	password = document.getElementById('password').value,
	passwd = document.getElementById('passwd').value;

	// console.log(passwd);

	if (yourname1 =="") {
		document.getElementById('erroruser').innerHTML = "Username cannot be empty";
	}else if(youremail==""){
		document.getElementById('erroremail').innerHTML = "Email cannot be empty";
	}else if(password==""){
		document.getElementById('errorpass1').innerHTML = "Password cannot be empty";
	}else if(passwd==""){
	    document.getElementById('errorpass2').innerHTML = "Confirm Password cannot be empty";
	}else if(passwd != password){
		document.getElementById('errorpass2').innerHTML = "Confirm Password must be same as password above";
	}

		
	
}