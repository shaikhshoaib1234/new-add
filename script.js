let Generatedpass = document.getElementById("Password");
let Generate = document.querySelector("button");
let PasswordLength = document.getElementById("Passlength");

Generate.addEventListener("click", function() {
    var includeNumbers = document.getElementById("numbers").checked;
    var includeuppercase = document.getElementById("uppercase").checked;
    var includelowercase = document.getElementById("lowercase").checked;
    var includeSymbols = document.getElementById("symbols").checked;

    var password = generatePassword(includeNumbers, includeuppercase, includelowercase, includeSymbols);
    Generatedpass.textContent = password;
    window.generatedPassword = password;
})

function generatePassword(includeNumbers, includeuppercase, includelowercase, includeSymbols) {
    var result = '';
    var characters = '';

    if (includeNumbers) {
        characters += '0123456789';
    }

    if (includeuppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includelowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (includeSymbols) {
        characters += '!@#$%^&*()_-+=<>?';
    }

    if (characters.length === 0) {
        alert("Please select at least one option.");
        return;
    }

    for (var i = 0; i < PasswordLength.value; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function copyToClipboard() {

    if (window.generatedPassword) {

        var textarea = document.createElement("textarea");
        textarea.value = window.generatedPassword;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand('copy');

        document.body.removeChild(textarea);

        alert("Password copied to clipboard!");
    } else {
        alert("Generate a password first before copying.");
    }
}