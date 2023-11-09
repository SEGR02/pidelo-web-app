import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/home.module.css";
import fb from "../assets/fb2.svg";
import ig from "../assets/ig.svg";
import ws from "../assets/ws2.svg";
import logo from "../assets/withoutbgfinalLight.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.firstFooter}>
        <div>
          <Image width="130" height="91" alt="" src={logo} />
        </div>
        <div>
          <p className={styles.footerTitle}>Contáctanos</p>
          <p>robert_raim@hotmail.com</p>
        </div>
        <div>
          <p className={styles.footerTitle}>Síguenos</p>
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61552971180498&mibextid=ZbWKwL"
          >
            <Image className={styles.iconsFooter} alt="" src={fb} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com">
            <Image className={styles.iconsFooter} alt="" src={ig} />
          </Link>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=51948573972"
          >
            <Image className={styles.iconsFooter} alt="" src={ws} />
          </Link>
        </div>
      </div>
      <div className={styles.finalFooterContainer}>
        <p>
          © 2023 Pídelo. Todos los derechos reservados | Designd{" "}
          <a
            className={styles.sebasPortfolio}
            target="_blank"
            href="https://exquisite-vacherin-7cbb35.netlify.app"
          >
            @Sebas
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
