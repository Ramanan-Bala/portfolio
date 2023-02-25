const left = document.getElementById("left");
const topbar = document.getElementById("topbar");
const name = document.getElementById("name");
const blob = document.getElementById("blob");
const nav = document.getElementById("nav");

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(function () {
    loader.classList.add("fadeOut");
  }, 1000);
});

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

const handleMove = (e) => {
  let p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
  topbar.style.background = `linear-gradient(
    90deg,
    var(--black) 0%,
    var(--black) ${p}%,
    var(--purple) ${p}%,
    var(--purple) ${100 - p}%
  )`;
};

document.onmousemove = (e) => handleMove(e);

document.ontouchmove = (e) => handleMove(e.touches[0]);

blob.classList.add("animated");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

let navItems = nav.querySelectorAll("span");
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
