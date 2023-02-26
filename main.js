const blob = document.getElementById("blob");
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursor-dot");

window.addEventListener("load", function () {
  const hexagon = document.getElementById("hexagon");
  let R = hexagon.getElementsByTagName("path")[1];

  R.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    { duration: 500, delay: 1000, fill: "forwards" }
  );

  hexagon.animate(
    {
      transform: "scale(0)",
    },
    { duration: 200, delay: 1700, fill: "forwards" }
  );

  const loader = document.getElementById("loader");
  setTimeout(function () {
    loader.classList.add("fadeOut");
  }, 1700);
});

window.onscroll = function (e) {
  let p = (e.clientX / window.innerWidth) * 100;
  if (document.documentElement.scrollTop < home.offsetHeight)
    topbar.style.background = `linear-gradient(
    90deg,
    var(--black) 0%,
    var(--black) ${p}%,
    var(--purple) ${p}%,
    var(--purple) ${100 - p}%
  )`;
  else topbar.style.background = "#2c2c2c";
};

function setCursor(size, border, opacity, bg) {
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;
  if (opacity) cursor.style.opacity = opacity;
  if (border) cursor.style.borderWidth = `${border}px`;
  if (bg) cursor.style.backgroundColor = bg;
}

window.addEventListener("mousedown", (e) => {
  setCursor(48, 1.5);
});

window.addEventListener("mouseup", (e) => {
  const cursorStyle = window.getComputedStyle(e.target)["cursor"];
  setCursor(24, 2);
  setTimeout(() => {
    if (cursorStyle == "pointer") {
      setCursor(48);
    }
  }, 100);
});

window.onpointermove = (e) => {
  const { clientX, clientY } = e;

  const keyframe = {
    left: `${clientX}px`,
    top: `${clientY}px`,
  };

  const option = (time) => {
    return {
      duration: time,
      fill: "forwards",
    };
  };

  blob.animate(keyframe, option(600));

  cursor.animate(keyframe, option(600));

  cursorDot.animate(keyframe, option(1200));
};
// !! skill

const subtitles = document.querySelectorAll(".card-subtitle");

const createWord = (text, index) => {
  const word = document.createElement("li");

  word.innerHTML = `${text} `;

  word.classList.add("card-subtitle-word");

  word.style.transitionDelay = `${index * 80}ms`;

  return word;
};

subtitles.forEach((subtitle, i) => {
  const addWord = (text, index) =>
    subtitle.appendChild(createWord(text, index));

  const createSubtitle = (text) => text.split(" ").map(addWord);
  if (i == 0)
    createSubtitle(
      "HTML CSS SASS Javascript Typescript Node\tJS Angular React NextJS Material\tUI NgZorro Prime\tNg TailwindCSS Figma Responsive\tDesign"
    );
  if (i == 1)
    createSubtitle(
      "Python Java Typescript Django Spring\tBoot Node\tJS Express Sequelize Mongoose SQL MongoDb"
    );
});
