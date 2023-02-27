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
