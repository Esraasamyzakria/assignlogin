document.addEventListener("DOMContentLoaded", () => {
    const signinEmail = document.querySelector("#signinEmail");
    const signinPassword = document.querySelector("#signinPassword");
    const validlogin = document.querySelector("#validlogin");
    const loginn = document.querySelector(".loginn");
    const signuplist = JSON.parse(localStorage.getItem("info")) || [];

    loginn.addEventListener("click", () => {
        if (signinEmail.value && signinPassword.value) {
            const user = signuplist.find(user => user.email === signinEmail.value);
            if (!user) {
                validlogin.textContent = "Email not registered.";
                validlogin.className = "text-danger";
            } else if (user.password !== signinPassword.value) {
                validlogin.textContent = "Password is incorrect.";
                validlogin.className = "text-danger";
            } else {
                localStorage.setItem("currentUser", user.name);
                window.location.href = "/home.html";
            }
        } else {
            validlogin.textContent = "All fields are required.";
            validlogin.className = "text-danger";
        }
    });
});


