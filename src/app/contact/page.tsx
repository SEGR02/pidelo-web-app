"use client";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imgWs from "../assets/imgWhatsApp.svg";
import circle from "../assets/circleContact.svg";
import wsIcon from "../assets/wsIcon.svg";

export default function Contact() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Image className={styles.circle} alt="" src={circle} />
        <div className={styles.titleContainer}>
          <p className={styles.title}>Eres cliente o necesitas contactarnos?</p>
          <p className={styles.description}>
            Dejanos tus datos y en breve nos comunicaremos contigo
          </p>
        </div>
        <div className={styles.mainSectionContainer}>
          <div className={styles.imgContainer}>
            <Image className={styles.imgWs} alt="" src={imgWs} />
          </div>
          <div className={styles.contactCardContainer}>
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <p>Contactanos</p>
              </div>
              <form className={styles.formContainer} action="">
                <div className={styles.inputContainer}>
                  <label htmlFor="name">Nombre</label>
                  <input id="name" className={styles.input} type="text" />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="phone">Celular</label>
                  <input id="phone" className={styles.input} type="text" />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    className={styles.input}
                    id="message"
                    rows={5}
                  ></textarea>
                </div>
                <button className={styles.button}>
                  <Image className={styles.wsIcon} alt="" src={wsIcon} />
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}
