"use client";
import styles from "../styles/wantMyVirtualStore.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import steps from "../assets/stepsFinal.svg";

export default function WantMyVirtualStore() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <div>
          <div className={styles.titleContainer}>
            <p className={styles.title}>
              Felicitaciones por haber tomado esta importante{" "}
              <span className={styles.titleColorWord}>decisión</span>
            </p>
          </div>
          <p className={styles.descriptionTitle}>
            A continuación, te contamos los pasos a seguir:
          </p>
        </div>
        <div className={styles.stepsImageContainer}>
          <Image className={styles.stepsImage} alt="" src={steps} />
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}
