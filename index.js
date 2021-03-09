const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// validations

function validate(){
	var username = document.getElementById("username").values;
	var username = document.getElementById("password").values;
	if(username==="" && password===""){
		alert("Enter Details!");
	}else{
		alert("Registered successfully!");
	}
}
