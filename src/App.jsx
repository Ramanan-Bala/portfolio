import { Fragment, useEffect } from "react";

import {
  Cursor,
  Footer,
  Home,
  Loader,
  Skills,
  Social,
  Topbar,
} from "./components";

import { useState } from "react";

import { motion } from "framer-motion";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6500);
    // Get the ID from the URL
    const url = new URL(window.location.href);
    const id = url.hash.substring(1); // Remove the "#" symbol from the ID

    // Scroll to the element with the ID
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="absolute z-20 pointer-events-none">
            <Cursor />
          </div>
          <Social />
          <div className="fixed top-0 w-full backdrop-blur z-10">
            <Topbar />
          </div>
          <Home />
          <Skills />
          <Footer />
        </motion.div>
      )}
    </Fragment>
  );
}

export default App;
