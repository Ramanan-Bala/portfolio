const sections = document.querySelectorAll("section");
const contents = document.querySelectorAll(".hidden");
const social = document.querySelectorAll(".float");

let slideFrames = {
  transform: ["translateY(30%)", "translateY(0%)"],
  opacity: [0, 1],
};

social.forEach((s) => {
  s.animate(slideFrames, { duration: 200, delay: 3800, fill: "forwards" });
});

topbar.animate(slideFrames, { duration: 200, delay: 2000, fill: "forwards" });

let observerOption = { threshold: 0.25 };

const homeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    let content = entry.target;
    for (let i = 0; i < content.children.length; i++) {
      const element = content.children[i];
      if (entry.isIntersecting) {
        let delay = i * 400;
        element.animate(slideFrames, {
          duration: 200,
          delay: delay,
          fill: "forwards",
        });
        homeObserver.unobserve(entry.target);
      }
    }
  });
}, observerOption);

let skillFrames = [
  {
    transform: ["translateX(-30%)", "translateX(0%)"],
    opacity: [0, 1],
  },
  {
    transform: ["translateX(30%)", "translateX(0%)"],
    opacity: [0, 1],
  },
];

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    let content = entry.target;
    for (let i = 0; i < content.children.length; i++) {
      const element = content.children[i];
      if (entry.isIntersecting) {
        let delay = i * 400;
        element.animate(skillFrames[i], {
          duration: 200,
          delay: delay,
          fill: "forwards",
        });
        skillObserver.unobserve(entry.target);
      }
    }
  });
}, observerOption);

setTimeout(() => {
  homeObserver.observe(homeContent);
  skillObserver.observe(skillContent);
}, 2200);
