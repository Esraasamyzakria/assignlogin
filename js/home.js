document.addEventListener("DOMContentLoaded", () => {
    const usernameElement = document.querySelector("#username");
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        usernameElement.textContent = `Welcome ${currentUser}`;
    } else {
        window.location.href = "/index.html";
    }

    document.querySelector(".loginout").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
    });
});


