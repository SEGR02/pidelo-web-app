"use client";
import Image from "next/image";
import styles from "../styles/aboutUs.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import figure from "../assets/figure.svg";
import agile from "../assets/agile.svg";
import cart from "../assets/cart.svg";
import phone from "../assets/phone.svg";

export default function AboutUs() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.mainSection}>
        <div className={styles.mainSectionRight}>
          <div className={styles.sectionTitle}>
            <p className={styles.title}>¿Qué te ofrecemos?</p>
          </div>
          <p className={styles.descriptionTitle}>
            Es hora de que tu negocio se sume a la era digital. Te acompañamos
            en ese viaje.
          </p>
          <div className={`${styles.card} ${styles.cardLeft}`}>
            <Image alt="" src={cart} />
            <p className={styles.cardTitle}>Contar con una tienda virtual</p>
            <p className={styles.cardDescription}>
              Te ayudaremos a crear tu propia tienda virtual. Podrás subir tus
              productos, información y fotos referenciales. Todo lo que tus
              clientes necesitan saber para realizar su pedido.
            </p>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.cardMiddle}`}>
            <Image alt="" src={agile} />
            <p className={styles.cardTitle}>
              Agilidad y control de tus pedidos
            </p>
            <p className={styles.cardDescription}>
              Te brindaremos una página web para que controles los pedidos de
              tus clientes. El pedido será preciso y con la información que
              necesitas para atenderlo.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardRigth}`}>
            <Image alt="" src={phone} />
            <p className={styles.cardTitle}>
              Podrás gestionar tus pedidos desde un único lugar
            </p>
            <p className={styles.cardDescription}>
              Olvídate de estar respondiendo llamadas, enviando información por
              WhatsApp u otras redes sociales. Con "Pídelo" podrás centralizar
              los pedidos de tus clientes.
            </p>
          </div>
          <Image className={styles.figure} alt="" src={figure} />
        </div>
      </main>
      <p className={styles.lastP}>
        Te ayudamos a potenciar tu negocio a <br /> través de las herramientas y
        oportunidades <br />
        del mundo digital y así impulsar tus ventas
      </p>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}
