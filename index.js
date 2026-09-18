const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


const getStartedBtns = document.querySelectorAll(".getstartbtn");

getStartedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.reload();
    });
});
