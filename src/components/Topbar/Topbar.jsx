import React, { useEffect } from "react";
import "./Topbar.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoFill } from "../../assets/logoFill.svg";

import { motion } from "framer-motion";
import { useState } from "react";

const Topbar = () => {
  const [left, setLeft] = useState(10);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("#nav a");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60)
          current = section.getAttribute("id");
      });

      navLi.forEach((li, id) => {
        li.classList.remove("selected");
        if (li.classList.contains(current)) {
          li.classList.add("selected");
          handelNavActive(id);
        }
      });

      if (current === "") {
        navLi[0].classList.add("selected");
        handelNavActive(0);
      }
    };
  });

  const navLink = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Skill",
      href: "#skill",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handelNavActive = (id) => {
    setSelected(id);
    setLeft(id * 83 + 10);
  };

  return (
    <div className="topbar">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.15 }}
        className="relative"
      >
        <LogoFill className="absolute top-2.5 left-2.5 scale-150 -z-10" />
        <motion.div className="logo z-10" whileHover={{ x: -4, y: -4 }}>
          <Logo />
        </motion.div>
      </motion.div>
      <motion.div
        id="nav"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {navLink.map((l, i) => {
          return (
            <a
              key={i}
              href={l.href}
              onClick={() => handelNavActive(i)}
              onMouseOver={() => setLeft(i * 83 + 10)}
              onMouseLeave={() => setLeft(selected * 83 + 10)}
              className={
                selected === i
                  ? "selected " + l.name.toLowerCase()
                  : l.name.toLowerCase()
              }
            >
              {l.name}
            </a>
          );
        })}
        <div className="navIndicator" style={{ left }}></div>
      </motion.div>
    </div>
  );
};

export default Topbar;
