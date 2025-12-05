let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let feedback = document.querySelector('textarea').value;

    if (name === "" || email === "" || feedback === "") {
        alert("Please fill all the fields!");
        return;
    }

    alert("Thank you for your feedback, " + name + "! 💗");

    form.reset();
});
