const left = document.getElementById("left");
const topbar = document.getElementById("topbar");
const name = document.getElementById("name");
const blob = document.getElementById("blob");
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursor-dot");
const nav = document.getElementById("nav");
const home = document.getElementById("home");

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(function () {
    loader.classList.add("fadeOut");
  }, 1000);
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

let letters = ["R", "a", "m", "s", "H", "e", "r", "e"];

setTimeout(() => {
  for (let i = 0; i < letters.length; i++) {
    let span = document.createElement("span");
    span.innerText = letters[i];
    span.style.animationDelay = `${i * 150}ms`;
    span.classList.add("animated", "iRubberBand");
    span.addEventListener("animationend", (event) => {
      span.classList.remove("rubberBand", "iRubberBand");
      span.style.opacity = 1;
    });
    span.onmouseover = (span) => toggleRubberBand(span);
    name.appendChild(span);
  }
}, 1000);

function toggleRubberBand(e) {
  let span = e.target;
  span.classList.add("animated", "rubberBand");
}

function setCursor(size, border, opacity, bg) {
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;
  if (opacity) cursor.style.opacity = opacity;
  if (border) cursor.style.borderWidth = `${border}px`;
  if (bg) cursor.style.backgroundColor = bg;
}

const handleMove = (e) => {
  const cursorStyle = window.getComputedStyle(e.target)["cursor"];

  let p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
  if (document.documentElement.scrollTop < home.offsetHeight)
    topbar.style.background = `linear-gradient(
    90deg,
    var(--black) 0%,
    var(--black) ${p}%,
    var(--purple) ${p}%,
    var(--purple) ${100 - p}%
    )`;
  else topbar.style.background = "#2c2c2c";
  if (cursorStyle == "pointer") setCursor(48, 1.5, 0.2, "#f2f2f2");
  else setCursor(24, 1.5, 1, "transparent");
};

document.onmousemove = (e) => handleMove(e);

document.ontouchmove = (e) => handleMove(e.touches[0]);

cursor.classList.add("animated");

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

let navItems = nav.querySelectorAll("a");
let navIndicator = nav.querySelector("#indicator");

function activeLink() {
  navItems.forEach((item) => item.classList.remove("selected"));
}

navItems.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    navIndicator.style.left = `${10 + 83 * i}px`;
  });
  item.addEventListener("mouseleave", () => {
    let pos = navIndicator.getAttribute("pos");
    navIndicator.style.left = `${10 + 83 * pos}px`;
  });
  item.addEventListener("click", () => {
    activeLink();
    item.classList.add("selected");
    navIndicator.style.left = `${10 + 83 * i}px`;
    navIndicator.setAttribute("pos", i);
  });
});
