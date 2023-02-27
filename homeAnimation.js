let skill = ["backend", "frontend"];
let description = [
  "I create successful restful api that are fast, easy to use, and built with best practices. I have experience in creating api using libraries like Spring-Boot, Node ExpressJS, Sequelize, Mongoose and Django.",
  "I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, experienced in developing real-time applications, animations, and coding interactive layouts.",
];

let skillContainer = document.querySelector(".fancy");
let descriptionContainer = document.querySelector(".intro-text");

setInterval(() => {
  if (skillContainer.innerHTML == skill[0]) {
    skillContainer.animate(
      {
        transform: ["translateY(0%)", "translateY(-30%)"],
        opacity: [1, 0],
      },
      { duration: 200 }
    );
    descriptionContainer.animate(
      {
        opacity: [1, 0],
      },
      { duration: 200 }
    );
    setTimeout(() => {
      skillContainer.innerHTML = skill[1];
      descriptionContainer.innerHTML = description[1];
    }, 200);
    skillContainer.animate(
      {
        transform: ["translateY(30%)", "translateY(0%)"],
        opacity: [0, 1],
      },
      { duration: 200, delay: 200 }
    );
    descriptionContainer.animate(
      {
        opacity: [0, 1],
      },
      { duration: 200, delay: 200 }
    );
  } else {
    skillContainer.animate(
      {
        transform: ["translateY(0%)", "translateY(-30%)"],
        opacity: [1, 0],
      },
      { duration: 200 }
    );
    descriptionContainer.animate(
      {
        opacity: [1, 0],
      },
      { duration: 200 }
    );
    setTimeout(() => {
      skillContainer.innerHTML = skill[0];
      descriptionContainer.innerHTML = description[0];
    }, 200);
    skillContainer.animate(
      {
        transform: ["translateY(30%)", "translateY(0%)"],
        opacity: [0, 1],
      },
      { duration: 200, delay: 200 }
    );
    descriptionContainer.animate(
      {
        opacity: [0, 1],
      },
      { duration: 200, delay: 200 }
    );
  }
}, 6000);
