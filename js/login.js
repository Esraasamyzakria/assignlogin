document.addEventListener("DOMContentLoaded", () => {
    const signinEmail = document.querySelector("#signinEmail");
    const signinPassword = document.querySelector("#signinPassword");
    const validlogin = document.querySelector("#validlogin");
    const loginn = document.querySelector(".loginn");
    const errorEmail = document.getElementById("massageValidEmail");
    const errorPassword = document.getElementById("massageValidPassword");
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
    var validationFlag = {
        isEmailValid :false ,
        isPasswordValid : false
}
    
    function checkValidation(inputElement , regex , errorElement , flag) {
        var isValid = regex.test(inputElement.value)
        inputElement.classList.toggle("is-valid" , isValid)
        inputElement.classList.toggle("is-invalid" ,!isValid)
        errorElement.classList.toggle("d-none" , isValid)
        errorElement.classList.toggle("d-block" , !isValid)
        if (isValid) {
        validationFlag[flag] = true
        }else{
        validationFlag[flag]= false
        }  
    }
    signinEmail.addEventListener("input" , function () {
        checkValidation( signinEmail , /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, errorEmail ," isEmailValid"  )
    })
    signinPassword.addEventListener("input" , function () {
        checkValidation( signinPassword ,/^.{8,}$/ , errorPassword, "isPasswordValid"  ) 
    })
});


