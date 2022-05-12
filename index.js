let passwordDisplay1 = document.getElementById('password1');
let passwordDisplay2 = document.getElementById('password2');
let passwordDisplay3 = document.getElementById('password3');
let passwordDisplay4 = document.getElementById('password4');
let passwordDisplays = [passwordDisplay1, passwordDisplay2, passwordDisplay3, passwordDisplay4];
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_<>/?+";
let alertMessage = document.getElementById("alert-message");

function generateRandomPasswords() {
    let maxCharacters = document.getElementById("user-input").value;
    if(maxCharacters > 20 || maxCharacters < 1) {
        alertMessage.textContent = "Please enter a number between 1 and 20";
        for (let i = 0; i < passwordDisplays.length; i++) {
            passwordDisplays[i].textContent = "";
        }
    } else {
        alertMessage.textContent = "";
    for (let i = 0; i < passwordDisplays.length; i++) {
        let newPassword = [];
        for(let j = 0; j < maxCharacters; j++) {
            newPassword.push(characters[Math.floor(Math.random() * 76)]); 
        }
        passwordDisplays[i].textContent = newPassword.join('');
    }
    return;
    }
}