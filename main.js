const navItems = nav.querySelectorAll("a");

const sections = document.querySelectorAll("section");
const name = document.getElementById("name");

var prevScrollPos = window.pageYOffset;
var current = "";

sections.forEach((section) => {
  // section.style.minHeight = `${screen.height}px`;
  if (screen.width < 640) {
    cursor.style.display = "none";
    cursorDot.style.display = "none";
  }
});

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

document.addEventListener("scroll", () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos || currentScrollPos == 0)
    topbar.style.top = "0";
  else topbar.style.top = "-100px";

  prevScrollPos = currentScrollPos;

  // if (currentScrollPos == 0) {
  //   topbar.style.backdropFilter = "blur(0px)";
  //   topbar.style.boxShadow = "none";
  // } else {
  // topbar.style.backdropFilter = "blur(10px)";
  // topbar.style.boxShadow = "0 10px 30px -10px var(--black)";
  // }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (
      window.pageYOffset >= sectionTop &&
      current != section.getAttribute("id")
    ) {
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
});

window.addEventListener("load", function () {
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

  setTimeout(function () {
    loader.classList.add("fadeOut");
  }, 1700);
});

// !! Rams Here Nav text

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

// !! Cursor

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

  cursor.animate(keyframe, option(300));

  cursorDot.animate(keyframe, option(600));
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

const handleMove = (e) => {
  const cursorStyle = window.getComputedStyle(e.target)["cursor"];

  let p = (e.clientX / window.innerWidth) * 100;
  if (cursorStyle == "pointer") setCursor(48, 1.5, 0.2, "#f2f2f2");
  else setCursor(24, 1.5, 1, "transparent");
};

document.onmousemove = (e) => handleMove(e);

document.ontouchmove = (e) => handleMove(e.touches[0]);
