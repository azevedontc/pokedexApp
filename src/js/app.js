const buttonTheme = document.getElementById("button-theme");
const buttonImg = document.querySelector(".button");
const body = document.querySelector("body");
buttonTheme.addEventListener("click", () => {
    const nightmodeOn = body.classList.contains("night-mode");

    body.classList.toggle("night-mode");

    if (nightmodeOn) {
        // body.classList.remove("night-mode");
        buttonImg.setAttribute("src", "./src/icons/sun.png");
    } else {
        // body.classList.add("night-mode");
        buttonImg.setAttribute("src", "./src/icons/moon.png");
    }
});
