import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [content, setContent] = useState(1);
  let skill = ["backend", "frontend"];
  let description = [
    "I create successful restful api that are fast, easy to use, and built with best practices. I have experience in creating api using libraries like Spring-Boot, Node ExpressJS, Sequelize, Mongoose and Django.",
    "I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, experienced in developing real-time applications, animations, and coding interactive layouts.",
  ];

  const shuffle = useCallback(() => {
    if (content === 0) setContent(1);
    else setContent(0);
  }, [content]);

  useEffect(() => {
    const intervalID = setInterval(() => shuffle(), 5000);
    return () => clearInterval(intervalID);
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const children = {
    hidden: { opacity: 0, top: 50 },
    show: { opacity: 1, top: 0 },
  };

  return (
    <section id="home">
      <span className="tags top-tags">
        &lt;/html&gt; <br />
      </span>
      <motion.div
        className="gradient-border"
        initial={{ borderWidth: 0 }}
        whileInView={{ borderLeftWidth: 2 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          id="homeContent"
          className="intro"
        >
          <motion.span variants={children} className="text1">
            Hi, my name is
          </motion.span>

          <motion.span
            variants={children}
            data-tag="name"
            className="text2 tag-child"
          >
            Ramanan Balamurugan
          </motion.span>

          <motion.div variants={children} className="text3">
            <span>I'm a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={content}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
                className="fancy"
              >
                {skill[content]}
              </motion.span>
            </AnimatePresence>
            <span>developer</span>
          </motion.div>

          <motion.div variants={children} data-tag="p" className="tag-child">
            <AnimatePresence mode="wait">
              <motion.p
                key={content}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
                className="intro-text"
              >
                {description[content]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <motion.div
            variants={children}
            className="bg-green max-w-max mt-5 rounded"
          >
            <a
              href="https://dev.to/ramanan_kb"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                whileHover={{ x: -4, y: -4 }}
                href="https://dev.to/ramanan_kb"
                className="border bg-black border-green p-4 px-6 text-sm tracking-wider rounded text-green"
              >
                Check out my blog!
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <span className="tags bottom-tags">
        <br /> &lt;/html&gt;
      </span>
    </section>
  );
};

export default Home;
