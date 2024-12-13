

document.addEventListener("DOMContentLoaded", () => {
    const signupName = document.querySelector("#signupName");
    const signupEmail = document.querySelector("#signupEmail");
    const signupPassword = document.querySelector("#signupPassword");
    const validMessage = document.querySelector("#vaild");
    const signup = document.querySelector(".sign-up");
    let signuplist = JSON.parse(localStorage.getItem("info")) || [];

    signup.addEventListener("click", () => {
        if (signupName.value && signupEmail.value && signupPassword.value) {
            const emailExists = signuplist.some(user => user.email === signupEmail.value);
            if (emailExists) {
                validMessage.textContent = "Email already exists.";
                validMessage.className = "text-danger";
            } else {
                signuplist.push({ name: signupName.value, email: signupEmail.value, password: signupPassword.value });
                localStorage.setItem("info", JSON.stringify(signuplist));
                validMessage.textContent = "Registration successful!";
                validMessage.className = "text-success";
                signupName.value = signupEmail.value = signupPassword.value = "";
            }
        } else {
            validMessage.textContent = "All fields are required.";
            validMessage.className = "text-danger";
        }
    });
});

