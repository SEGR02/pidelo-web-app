"use client";
import Image from "next/image";
import styles from "./styles/home.module.css";
import Navbar from "./components/Navbar";
import ball from "./assets/ball.svg";
import image1 from "./assets/Img1.svg";
import image2 from "./assets/img2.svg";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <header>
        <Navbar />
      </header>
      <main className={styles.section1}>
        <div>
          <div className={styles.leftSection1}>
            <h1 className={styles.title}>Seremos tu aliado estratégico</h1>
            <h2 className={styles.p}>
              Te permitiremos tener presencia en el mundo digital y vender en
              línea de una manera fácil y rápida.
            </h2>
            <div className={styles.buttonContainer}>
              <Link href="/aboutUs">
                <button className={styles.button}>¿Qué te ofrecemos?</button>
              </Link>
            </div>
          </div>
          <div className={styles.rigthSection1}>
            <div className={styles.img1Container}>
              <Image className={styles.image1} alt="" src={image1} />
            </div>
            <div className={styles.containerRigthP}>
              <h2 className={styles.rigthP}>
                <span className={styles.colorRigthP}>Es simple.</span> Los
                clientes buscan, te encuentran, te contactan,{" "}
                <span className={styles.colorRigthP}>vendes.</span>
              </h2>
            </div>
          </div>
          <Image className={styles.ball} alt="" src={ball} />
        </div>
      </main>
      <section className={styles.containerCards}>
        <div className={styles.card}>
          <p className={styles.cardsP}>
            Las plataformas digitales son clave para el{" "}
            <span className={styles.colorCardsP}>éxito de los negocios.</span>
          </p>
        </div>
        <div className={styles.imageWithCardContainer}>
          <Image className={styles.image2} alt="" src={image2} />
          <div className={styles.cardCustom}>
            <p className={styles.cardsP}>
              La transformación digital ya no es el futuro, es el{" "}
              <span className={styles.colorCardsP}>presente</span>
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardsP}>
            Las plataformas digitales son las que facilitan hoy el enlace entre
            los <span className={styles.colorCardsP}>negocios</span> y los{" "}
            <span className={styles.colorCardsP}>clientes</span>
          </p>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
