const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fullname = loginForm.fullname.value;
    const age = loginForm.age.value;
    const gender = loginForm.gender.value;
    const courseofinterest = loginForm.courseofinterest.value;

    if (fullname === "PRECIOUS" && age === "15" && gender === "FEMALE"  && courseofinterest === "WEB") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})