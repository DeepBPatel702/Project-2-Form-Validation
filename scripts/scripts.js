'use strict mode'
const form = document.getElementById('form');
const name = document.getElementById('Name');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const confirmPassword = document.getElementById('Confirm Password');

const showError = function(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small');
	small.innerText = message;
}

const showSuccess = function(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success'
};

const isValidEmail = function(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const checkEmail = function(input){
	if(isValidEmail(input.value)){
		showSuccess(input);
	}else{
		showError(input, '*Email id is not valid');
	}}

const checkRequired = function(input){
	if(input.value === ''){
		showError(input, '*required field');
	}else{
		showSuccess(input)
	}
};

const checkLength = function(input, min, max){
	if(input.value.length < 5 || input.value.length > 12){
		showError(input, 'length must be between 5 and 12 Characters')
	}else if(input.value === ''){
		showError(input, '*required')
	}
}

form.addEventListener('submit', function(e){
	e.preventDefault();
	checkRequired(name);
	checkRequired(email);
	checkRequired(password);
	checkRequired(confirmPassword);
	checkLength(name);
	checkEmail(email)
})
// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	if(name.value === ''){
// 		showError(name, '*required')
// 	}else{
// 		showSuccess(name)
// 	}
// 	if(password.value === ''){
// 		showError(password, '*required');
// 	}else{
// 		showSuccess(password);
// 	}
// 	if(confirmPassword.value === ''){
// 		showError(confirmPassword, '*required');
// 	}else if(confirmPassword.value !== password.value){
// 		showError(confirmPassword, 'Confirm Password did not match ')
// 	}else{
// 		showSuccess(confirmPassword);
// 		showSuccess(password);
// 	}