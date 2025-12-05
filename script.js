const themeButton = document.querySelector(".themeButton");
const body = document.body;

themeButton.addEventListener("click", () => {
    body.classList.toggle("lightTheme");
});


const categoryButtons = document.querySelectorAll(".categoryButton");

categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");
    });
});
