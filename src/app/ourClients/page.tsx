"use client";
import Image from "next/image";
import styles from "../styles/ourClients.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import lumay from "../assets/lumay.svg";
import clientimg2 from "../assets/corazonDeSurco.svg";
import arrowRight from "../assets/arrowToRight.svg";
import arrowLeft from "../assets/arrowToLeft.svg";

export default function Contact() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <div className={styles.titleContainer}>
          <p className={styles.title}>
            Nuestros <span className={styles.colorTitleWord}>Clientes</span>
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <Image className={styles.arrows} alt="" src={arrowLeft} />
          <div className={`${styles.card} ${styles.cardDown}`}>
            <Image className={styles.cardImage} alt="" src={lumay} />
            <div>
              <p className={styles.clientName}>Lumay</p>
              <p className={styles.clientReview}>
                Trabajo con Pídelo desde que comenzamos con Lumay 100%
                recomendados
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.cardImage} alt="" src={clientimg2} />
            <div>
              <p className={styles.clientName}>Corazón de Sucro</p>
              <p className={styles.clientReview}>
                Decidí iniciar mi negiocio virtualmente y ha sido mi mejor
                decisión gracias a Pídelo, muy buen servicio
              </p>
            </div>
          </div>
          <Image className={styles.arrows} alt="" src={arrowRight} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
