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
        <Image alt="" src={circle} />
        <div className={styles.titleContainer}>
          <p className={styles.title}>Eres cliente o necesitas contactarnos?</p>
          <p className={styles.description}>
            Dejanos tus datos y en breve nos comunicaremos contigo
          </p>
        </div>
        <div className={styles.mainSectionContainer}>
          <div className={styles.imgContainer}>
            <Image alt="" src={imgWs} />
          </div>
          <div className={styles.contactCardContainer}>
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <p>Contactanos</p>
              </div>
              <form className={styles.formContainer} action="">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="">Nombre</label>
                  <input className={styles.input} type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="">Celular</label>
                  <input className={styles.input} type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="">Mensaje</label>
                  <textarea
                    className={styles.input}
                    name=""
                    id=""
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
