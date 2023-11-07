import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css";
import darkLogo from "../assets/withoutbgfinalDark.svg";
import lightLogo from "../assets/withoutbgfinalLight.svg";
import menuMobile from "../assets/menuMobileLight.png";
import close from "../assets/close.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.link} href="/">
          <Image
            className={styles.logo}
            width="130"
            height="91"
            alt=""
            src={
              pathname.includes("S") || pathname.includes("s")
                ? lightLogo
                : darkLogo
            }
          />
        </Link>
      </div>
      <div>
        <Image
          onClick={() => setShowMenu(!showMenu)}
          className={styles.menuMobile}
          alt=""
          src={showMenu ? close : menuMobile}
        />
      </div>
      <div
        className={`${styles.containerLinks} ${
          showMenu ? styles.showMobileMenu : ""
        }`}
      >
        <Link
          style={pathname.includes("/aboutUs") ? { fontWeight: "bold" } : {}}
          className={styles.link}
          href="/aboutUs"
        >
          Sobre Nostros
        </Link>
        <Link
          style={
            pathname.includes("/wantMyVirtualStore")
              ? { fontWeight: "bold" }
              : {}
          }
          className={styles.link}
          href="/wantMyVirtualStore"
        >
          Quiero Mi Tienda <br /> Virtual
        </Link>
        <Link
          style={pathname.includes("/contact") ? { fontWeight: "bold" } : {}}
          className={styles.link}
          href="/contact"
        >
          Contacto
        </Link>
        <Link
          style={pathname.includes("/ourClients") ? { fontWeight: "bold" } : {}}
          className={styles.link}
          href="/ourClients"
        >
          Nuestros <br /> Clientes
        </Link>
        <Link className={styles.link} target="_blank" href="https://google.com">
          Registra Tu <br />
          Negocio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
