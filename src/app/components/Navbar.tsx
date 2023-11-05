import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css";
import darkLogo from "../assets/withoutbgfinalDark.svg";
import lightLogo from "../assets/withoutbgfinalLight.svg";
import menuMobile from "../assets/menuMobileLight.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.link} href="/">
          <Image
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
        <Image className={styles.menuMobile} alt="" src={menuMobile} />
      </div>
      <div className={styles.containerLinks}>
        <Link className={styles.link} href="/aboutUs">
          Sobre Nostros
        </Link>
        <Link className={styles.link} href="/wantMyVirtualStore">
          Quiero Mi Tienda <br /> Virtual
        </Link>
        <Link className={styles.link} href="/contact">
          Contacto
        </Link>
        <Link className={styles.link} href="/ourClients">
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
