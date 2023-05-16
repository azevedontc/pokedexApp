const buttonTheme = document.getElementById("button-theme");
const buttonImg = document.querySelector(".button");
const body = document.querySelector("body");

window.addEventListener('scroll', updateProgressBar);

// progress-bar
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrolledHeight = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercentage = (scrolledHeight / (fullHeight - windowHeight)) * 100;

  progressBar.style.width = scrollPercentage + '%';
}

// night-mode
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
