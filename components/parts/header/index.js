"use client";
import { useState, useEffect } from "react";
import { HeaderBanner } from "@public/assets";
import styles from "./style.module.scss";
import { navItems } from "@utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileHeader from "../mobileHeader";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();

  console.log("hash value", pathname);

  return (
    <>
      <MobileHeader />
      <header
        className={styles.header}
        style={{
          display:
            pathname === "/privacy-policy" || pathname === "/terms-condition"
              ? "none"
              : "block",
        }}
      >
        <section
          className={styles.headerBanner}
          style={{ backgroundImage: `url(${HeaderBanner.src})` }}
        ></section>
      </header>
      <section
        className={styles.navListBlock}
        style={{
          display:
            pathname === "/privacy-policy" || pathname === "/terms-condition"
              ? "none"
              : "flex",
        }}
      >
        <nav>
          {navItems.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className={
                activeSection === item.link ? styles.activeLink : styles.navLink
              }
              onClick={() => setActiveSection(item.link)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Header;
