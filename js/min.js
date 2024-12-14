

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

















// ocument.querySelector(".btn-signup");
// var validMassage = document.getElementById("valid-massage")

// var arraySign = [];
// if (JSON.parse(localStorage.getItem("arraySign")) !==null) {
//     var arraySign = JSON.parse(localStorage.getItem("arraySign"))
// }
// signupBtn.addEventListener("click" , function () {
//     signUp()
// })
// function signUp(){  
//     if (checkExisted()===false){
//         var signInput ={
//             signupName:signupName.value,
//             signupEmail:signupEmail.value,
//             signupPassword:signupPassword.value
//             }
//             arraySign.push(signInput);
//             localStorage.setItem( "arraySign" , JSON.stringify(arraySign)  )
//             clearForm()  
//             validMassage.innerHTML="Success! Signup complete.";
//             validMassage.style.cssText="color:limegreen"
//         }else if(checkExisted()===true){
//           validMassage.innerHTML= "email already exists.";
//             validMassage.style.cssText="color:red"
//         }
//         }
         
    
// function clearForm() {
//     signupName.value = "" ,
//     signupEmail.value = "",
//     signupPassword.value ="",
//     signupName.classList.remove("is-valid")
//     signupEmail.classList.remove("is-valid")
//     signupPassword.classList.remove("is-valid")

// }
// function checkExisted(){
//     for (var i = 0; i < arraySign.length; i++){
//     if (arraySign[i].signupEmail.toLowerCase()===signupEmail.value.toLowerCase()||arraySign[i].signupName.toLowerCase()===signupName.value.toLowerCase()) {
//        return true 
//     } }
//     return false     
// }


// function checkValidation(element , massageId) {
//     var text= element.value;
//     var regex ={
//         signupName:/^[a-zA-Z0-9]{3,}$/,
//         signupEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
//         signupPassword:/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$ %^&*-]).{8,}$/
//     }
//     var massageValid=document.getElementById(massageId)
//     if (regex [element.id].test(text)==true) {
//         element.classlist.add("is-valid")
//         element.classlist.remove("is-invalid")
//         massageValid.classlist.add("d-none")
//         return true 
//     }else{
//         element.classlist.remove("is-valid")
//         element.classlist.add("is-invalid")
//         massageValid.classlist.remove("d-none")
//     }return false
// }


// signupName.addEventListener("input" , function(){
//     checkValidation() 
// })


// function checkValidation() {
//     var nameRegex = /^[a-zA-Z0-9]{3,}$/;
//  var errorMassage = document.getElementById("massageValid");
//  var isValid = nameRegex.test(signupName.value)
//  signupName.classList.toggle("is-valid" , isValid)
//  signupName.classList.toggle("is-invalid" ,!isValid)
//  errorMassage.classList.toggle("d-none" , isValid)
//  errorMassage.classList.toggle("d-block" , !isValid)
//  if (isValid) {
//     isNameValid = true
//  }else{
//     isNameValid=false
//  }

 
// function validationInput() {
//     if (validationFlag.isNameValid && validationFlag.isEmailValid && validationFlag.isPasswordValid) {
//         signupBtn.classList.add("disabled");
//     } else {
//         signupBtn.classList.remove("disabled");
        
//     }
// }



// <div class="container my-5 text-center">
//         <div class=" input-box group m-auto w-75 p-5">
//             <h1>Smart Login System</h1>

//             <input id="signup-name" class="form-control my-3 text-white" placeholder="Enter your name" type="text">

        
//             <input id="signupEmail" class="form-control my-3 text-white" placeholder="Enter your email" type="email">


//             <input id="signupPassword" class="form-control my-3 text-white" placeholder="Enter  password" type="password">


//                 <p id="valid-massage"></p>

//             <button class="btn-signup btn btn-success w-100 my-3 ">Sign Up</button>
//             <p class="text-white">You have an account? <a class="text-white" href="/">Signin</a></p>
//         </div>
//     </div>