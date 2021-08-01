const passwordOutput = document.getElementById("password-output");
const copyButton = document.getElementById("copy");
const generateButton = document.getElementById("generateButton");
const length = document.getElementById("length");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = "&é\"'(-è_çà)=*#{[|^@]}ù!:;,?.§$";

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lower.checked) data.push(...lowercase);
  if (upper.checked) data.push(...uppercase);
  if (number.checked) data.push(...numbers);
  if (symbol.checked) data.push(...symbols);

  if (data.length === 0) {
    alert("Please select settings for the password");
    return;
  }

  for (let i = 0; i < length.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  //   Copy password to the clipboard
  copyButton.addEventListener("click", () => {
    passwordOutput.select();
    document.execCommand("copy");
    generateButton.textContent = "Copied !";
  });

  setTimeout(() => {
    generateButton.textContent = "GENERATE PASSWORD";
  }, 2000);
};

generateButton.addEventListener("click", generatePassword);
