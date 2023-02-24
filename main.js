const left = document.getElementById("left");
const topbar = document.getElementById("topbar");
const name = document.getElementById("name");
const blob = document.getElementById("blob");

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(function () {
    loader.classList.add("fadeOut");
  }, 1000);
});

let letters = ["R", "a", "m", "s", "H", "e", "r", "e"];

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
