

document.addEventListener("DOMContentLoaded", () => {
    const signupName = document.querySelector("#signupName");
    const signupEmail = document.querySelector("#signupEmail");
    const signupPassword = document.querySelector("#signupPassword");
    const validMessage = document.querySelector("#vaild");
    const signup = document.querySelector(".sign-up");
    const errorName = document.getElementById("massageValidName");
    const errorEmail = document.getElementById("massageValidEmail");
    const errorPassword = document.getElementById("massageValidPassword");
    
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
    var validationFlag = {
        isNameValid : false,
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
    signupName.addEventListener("input" , function () {
        checkValidation( signupName , /^[a-zA-Z0-9]{3,}$/ , errorName , "isNameValid"  )
    })
    signupEmail.addEventListener("input" , function () {
        checkValidation( signupEmail , /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, errorEmail ," isEmailValid"  )
    })
    signupPassword.addEventListener("input" , function () {
        checkValidation( signupPassword ,/^.{8,}$/ , errorPassword, "isPasswordValid"  ) 
    })
});
