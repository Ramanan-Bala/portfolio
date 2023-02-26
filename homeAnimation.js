const nav = document.getElementById("nav");
const navItems = nav.querySelectorAll("a");
const navIndicator = nav.querySelector("#indicator");

const home = document.getElementById("home");

const sections = document.querySelectorAll("section");

const left = document.getElementById("left");

const topbar = document.getElementById("topbar");

const name = document.getElementById("name");

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
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item, i) => {
    item.classList.remove("selected");
    if (item.href.includes(current)) {
      item.classList.add("selected");
      navIndicator.style.left = `${10 + 83 * i}px`;
      navIndicator.setAttribute("pos", i);
    }
  });
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
}, 1700);

function toggleRubberBand(e) {
  let span = e.target;
  span.classList.add("animated", "rubberBand");
}

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

let contents = document.querySelectorAll(".title");

let slideFrames = [
  {
    transform: "translateY(40%)",
    opacity: 0,
  },
  {
    transform: "translateY(0%)",
    opacity: 1,
  },
];

contents.forEach((content) => {
  for (let i = 0; i < content.children.length; i++) {
    const element = content.children[i];
    element.animate(slideFrames, {
      duration: 200,
      delay: 2300 + i * 350,
      fill: "forwards",
    });
  }
});

topbar.animate(slideFrames, { duration: 200, delay: 2000, fill: "forwards" });

const social = document.querySelectorAll(".float");

social.forEach((s) => {
  s.animate(slideFrames, { duration: 200, delay: 3600, fill: "forwards" });
});
