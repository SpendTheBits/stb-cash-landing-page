'use client'

import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

const BurgerMenu = (props) => {
  const show = {
    transform: typeof window !== "undefined" && window.innerWidth <= 590 ? "translateX(0)" : "translateX(31px)",
  };

  const hide = {
    transform: "translateX(0)",
    transitionEnd: {
      transform: "translateX(0)",
    },
  };
  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        onChange={() => {
          if (props.isOpen) {
            props.open(false);
          } else {
            props.open(true);
          }
        }}
        checked={props.isOpen}
      />
      <motion.label
        animate={props.isOpen ? show : hide}
        transition={{ delay: 0.06, duration: 1 }}
        htmlFor="checkbox"
        className={`toggle ${
          props.isOpen ? "activeBurgerMenu" : "inactiveBurgerMenu"
        }`}
      >
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </motion.label>
    </>
  );
};

export default BurgerMenu;
