
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill all the fields!");
        return;
    }

    alert("Login Successful! 🌸💗");
});
