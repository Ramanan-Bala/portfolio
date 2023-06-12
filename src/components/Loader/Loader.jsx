import React from "react";
import "./Loader.scss";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div className="loader">
      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          d="M15 1.5L3.29999 8.1V21.6L15 28.5L26.7 21.9V8.4L15 1.5Z"
          stroke="#08FDD8"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
          d="M12 10.8H14.3891C15.9818 10.8 17.008 11.2718 17.4677 12.2153C17.633 12.5621 17.7157 12.9532 17.7157 13.3887C17.7157 13.8202 17.6572 14.1851 17.5403 14.4835C17.4274 14.7819 17.2681 15.0379 17.0625 15.2517C16.6673 15.6629 16.123 15.9331 15.4294 16.0621C15.7157 16.9452 16.2016 17.5541 16.8871 17.8888C17.1129 18.0017 17.3024 18.0621 17.4556 18.0702C17.7137 18.0783 17.8951 18.0702 18 18.046V19.2194H17.7278C16.8206 19.2194 16.0484 18.8968 15.4113 18.2516C14.8508 17.6912 14.4738 16.9855 14.2802 16.1347H13.2097V19.2194H12V10.8ZM14.3104 15.1669C15.0403 15.1669 15.5806 15.0258 15.9314 14.7435C16.2822 14.4613 16.4576 14.0218 16.4576 13.425C16.4576 12.6307 16.0887 12.1186 15.3508 11.8888C15.0927 11.8081 14.7802 11.7678 14.4133 11.7678H13.2097V15.1669H14.3104Z"
          fill="#08FDD8"
        />
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
