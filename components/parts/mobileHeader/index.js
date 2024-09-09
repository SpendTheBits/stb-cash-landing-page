"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import MenuSlider from "@components/parts/menuSlider";
import { BurgerMenu, CustomImage } from "@components/ui";
import { StbLogo } from "@public/assets";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.mobileHeader}>
        <div>
          <CustomImage src={StbLogo} alt="STB Cash" />
        </div>
        <div>
          <BurgerMenu open={(val) => setIsOpen(val)} isOpen={isOpen} />
        </div>
      </div>
      <MenuSlider closeMenu={(val) => setIsOpen(val)} isOpen={isOpen} />
    </>
  );
};

export default MobileHeader;
