"use client";
import { motion } from "framer-motion";

const LineDivider = (props) => {
  const style = {
    borderTop: `4px solid ${props.color ? props.color : "var(--accentColor)"}`,
    opacity: "1",
    width: "100%",
    maxWidth: props.width ? props.width : "80px",
    margin: props.center
      ? "20px auto"
      : props.right
      ? "20px 0 20px auto"
      : props.margin
      ? props.margin
      : "20px 0",
  };
  return (
    <motion.hr
      style={style}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default LineDivider;
