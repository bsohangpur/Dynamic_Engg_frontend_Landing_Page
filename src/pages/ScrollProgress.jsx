import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 w-full h-2 bg-blue-shade-500 z-[9999]"
    />
  );
};

export default ScrollProgress;
