import React, { useCallback, useEffect, useState } from "react";
import "./Cursor.scss";

import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePos, setMousePos] = useState();
  const [cursorStyle, setCursorStyle] = useState();

  const [isClick, setIsClick] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", (e) => {
      handleMouseMove(e);
      const cursor = window.getComputedStyle(e.target)["cursor"];
      if (cursor !== cursorStyle) setCursorStyle(cursor);
    });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorStyle, handleMouseDown]);

  return (
    <>
      {/* <div id="cursorDot"></div>
      <div id="cursor"></div> */}
      {mousePos ? (
        <>
          <motion.div
            animate={{
              position: "fixed",
              opacity: 1,
              height: 4,
              width: 4,
              fontSize: "16px",
              borderRadius: "100%",
              backgroundColor: "#f2f2f2",
              x: mousePos.x - 4,
              y: mousePos.y - 4,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
          ></motion.div>
          <motion.div
            animate={cursorStyle}
            variants={{
              auto: {
                opacity: 1,
                height: 24,
                width: 24,
                scale: isClick ? 1.5 : 1,
                position: "fixed",
                border: "1.5px solid #f2f2f2",
                borderRadius: "100%",
                x: mousePos.x - 14,
                y: mousePos.y - 14,
              },
              pointer: {
                opacity: 0.2,
                height: 48,
                width: 48,
                scale: isClick ? 0.5 : 1,
                position: "fixed",
                backgroundColor: "#f2f2f2",
                borderRadius: "100%",
                x: mousePos.x - 26,
                y: mousePos.y - 26,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};

export default Cursor;
