// const btn = document.getElementById("submit");
// const form = document.querySelector("form");
// const warning = document.getElementById("warning");
// btn.addEventListener("click", () => {
// event.preventDefault();
// const p_word = document.getElementById("p_word").value;
// const u_name = document.getElementById("u_name").value;
// if (u_name == "" || p_word == "") {
// warning.innerText = "Fill all the fields"
// }
// else if (u_name.includes("@") == false) {
// warning.innerText = "Please include @ in your username";
// } else {
// warning.innerText = "";
// }
// });

const login_toggle_btn = document.getElementById("log");
const signup_toggle_btn = document.getElementById("sign");
const login_components = document.querySelectorAll(".login");
const signup_components = document.querySelectorAll(".signup");

login_toggle_btn.addEventListener("click", () => {
    event.preventDefault();
    login_components.forEach((login_component) => {
        login_component.style.display = "block";
        login_toggle_btn.classList.add("selected");
    });
    signup_components.forEach((signup_component) => {
        signup_component.style.display = "none";
        signup_toggle_btn.classList.remove("selected");

    });
    submit.innerText = "Login";
});

signup_toggle_btn.addEventListener("click", () => {
    event.preventDefault();
    login_components.forEach((login_component) => {
        login_component.style.display = "none";
        login_toggle_btn.classList.remove("selected");
    });
    signup_components.forEach((signup_component) => {
        signup_component.style.display = "block";
        signup_toggle_btn.classList.add("selected");
    });
    submit.innerText = "Signup";
});