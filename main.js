const left = document.getElementById("left");
const topbar = document.getElementById("topbar");
const blob = document.getElementById("blob");

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
