let FirstInp = document.getElementById("first-inp");
let LastInp = document.getElementById("last-inp");
let EmailInp = document.getElementById("email-inp");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let PasswordInp = document.getElementById("password-inp");

let FirstImg = document.querySelector(".first");
let LastImg = document.querySelector(".last");
let EmailImg = document.querySelector(".email");
let PasswordImg = document.querySelector(".password");

let FirstPrg = document.querySelector(".first-prg");
let LastPrg = document.querySelector(".last-prg");
let EmailPrg = document.querySelector(".email-prg");
let PasswordPrg = document.querySelector(".password-prg");

let ButtonEl = document.getElementById("button");

ButtonEl.addEventListener("click", function (event) {
    event.preventDefault();
    checkInput(FirstInp, FirstImg, "First Name cannot be empty", FirstPrg);
    checkInput(LastInp, LastImg, "Last Name cannot be empty", LastPrg);
    checkEmail();
    checkInput(PasswordInp, PasswordImg, "Password cannot be empty", PasswordPrg);
});

function checkInput(input, errorImg, errorMessage, errorPrg) {
    if (input.value === "") {
        errorImg.style.display = "block";
        input.style.border = "1px solid hsl(0, 100%, 74%)";
        errorPrg.innerHTML = errorMessage;
        errorPrg.style.display = "block";
    } else {
        errorImg.style.display = "none";
        errorPrg.style.display = "none";
        input.style.border = "1px solid hsl(246, 25%, 77%)";
    }
}

function checkEmail() {
    if (!EmailInp.value.match(mailformat) || EmailInp.value === "") {
        EmailImg.style.display = "block";
        EmailInp.style.border = "1px solid hsl(0, 100%, 74%)";
        EmailPrg.innerHTML = "Looks like this is not an email"
        EmailPrg.style.display = "block"

    } else {
        EmailImg.style.display = "none";
        EmailPrg.style.display = "none";
        EmailInp.style.border = "1px solid hsl(246, 25%, 77%)";
    }
}
