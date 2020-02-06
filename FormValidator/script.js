const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');


//mostrar erros de campos
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Email valido ?
function checkEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value)){
       showSuccess(input);
   }else {
       showError(input, 'O Email não é valido')
   }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, ` ${getFieldName(input)} é obrigatório`)
        }else{
            showSuccess(input);
        }
    });
}

//Checar tamanho do campo
function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} tem que ter no minimo ${min} caracteres`);
    }else if (input.value.length >max){
        showError(input, `${getFieldName(input)} tem que ter no maximo ${max} caracteres`);
    }else{
        showSuccess(input);
    }
}

// Password Match ? 
function checkPass(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'As senhas não coincidem!');
    }
}


// Get Field Name 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    
 checkRequired([username, email, senha, senha2]);
 checkLength(username, 3, 15);
 checkLength(senha, 6, 25);
 checkEmail(email);
 checkPass(senha, senha2);
});