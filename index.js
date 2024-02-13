const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">",
    ".", "?",
    "/"];

let passwordContainerEl = document.getElementById("passwordContainer");
let passwordGeneraterEl = document.getElementById("passwordGeneratorBtn");
let copyButton = document.getElementById("copyBtn");

let password = "";
let passwordLength = 12;

// Function for Generating Password
function generatePassword() {

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];

    }

    passwordContainerEl.textContent = password;
    password = "";

}

// Function to Copy the Password
function copyPassword() {
    let passwordText = document.getElementById("passwordContainer").innerText;
    navigator.clipboard.writeText(passwordText);
    alert('Password copied to clipboard');
}

// Handle click events

passwordGeneraterEl.addEventListener("click", generatePassword)
copyButton.addEventListener("click", copyPassword);

