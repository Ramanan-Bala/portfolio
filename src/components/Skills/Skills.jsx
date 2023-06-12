import { motion } from "framer-motion";
import React from "react";
import "./Skills.scss";

const Skills = () => {
  const createWord = (text, index) => {
    return (
      <li
        key={index}
        className="card-subtitle-word"
        style={{
          transitionDelay: `${index * 80}ms`,
        }}
      >
        {text}
      </li>
    );
  };

  const createSubtitle = (text) => text.split(" ").map(createWord);

  return (
    <section id="skill" className="card-container flex items-center">
      <motion.div
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 1, right: 0, transition: { delay: 0.3 } }}
        viewport={{ once: true }}
        className="card"
      >
        <div className="card-content">
          <h3 className="card-title">Frontend Skills</h3>
          <ul className="card-subtitle">
            {createSubtitle(
              "HTML CSS SASS Javascript Typescript Node\tJS Angular React NextJS Material\tUI NgZorro Prime\tNg TailwindCSS Figma Responsive\tDesign"
            )}
          </ul>
        </div>
        <i className="fa-solid fa-hat-witch card-icon"></i>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, left: 100 }}
        whileInView={{ opacity: 1, left: 0, transition: { delay: 0.3 } }}
        viewport={{ once: true }}
        className="card"
      >
        <div className="card-content">
          <h3 className="card-title">Backend Skills</h3>
          <ul className="card-subtitle">
            {createSubtitle(
              "Python Java Typescript Django Spring\tBoot Node\tJS Express Sequelize Mongoose SQL MongoDb"
            )}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
