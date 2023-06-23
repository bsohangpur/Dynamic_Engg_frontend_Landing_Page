import React, { Component } from "react";
import { motion } from "framer-motion";

export default class PageAnimation extends Component {
  render() {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        exit={{ scale: 0 }}
      >
        {this.props.children}
      </motion.div>
    );
  }
}
