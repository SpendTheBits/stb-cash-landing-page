'use client'

import {useEffect} from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { navItems } from "@utils/data";

const MenuSlider = (props) => {
  // const navigate = useNavigate();
  const show = {
    width: typeof window !== "undefined" && window.innerWidth <= 590 ? "100%" : "400px",
    transformOrigin: "left",
  };

  const hide = {
    width: 0,
    transformOrigin: "left",
    transitionEnd: {
      width: 0,
    },
  };

  // Dont allow user to scroll when popup is active
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props]);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={props.isOpen ? show : hide}
        transition={{ duration: 1 }}
        className={`${styles.menuSliderContainer} mobileMenuBlock`}
      >
        <ul>
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              animate={props.isOpen ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            >
              <Link href={item.link} onClick={() => props.closeMenu(false)}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default MenuSlider;
