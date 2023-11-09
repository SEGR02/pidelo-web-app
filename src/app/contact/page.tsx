"use client";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imgWs from "../assets/imgWhatsApp.svg";
import circle from "../assets/circleContact.svg";
import wsIcon from "../assets/wsIcon.svg";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const finalMessage = encodeURIComponent(
    `Hola soy ${name}, mi numero de telefono es ${phoneNumber}. ${message}`
  );
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
            Déjanos tus datos y en breve nos comunicaremos contigo
          </p>
        </div>
        <div className={styles.mainSectionContainer}>
          <div className={styles.imgContainer}>
            <Image className={styles.imgWs} alt="" src={imgWs} />
          </div>
          <div className={styles.contactCardContainer}>
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <p>Contáctanos</p>
              </div>
              <form className={styles.formContainer} action="">
                <div className={styles.inputContainer}>
                  <label className={styles.label} htmlFor="name">
                    Nombre
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className={styles.input}
                    type="text"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className={styles.label} htmlFor="phone">
                    Celular
                  </label>
                  <input
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    id="phone"
                    className={styles.input}
                    type="text"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className={styles.label} htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.input}
                    id="message"
                    rows={5}
                  ></textarea>
                </div>
                <Link
                  className={styles.linkOff}
                  target="_blank"
                  href={
                    finalMessage
                      ? `https://wa.me/51948573972?text=${finalMessage}`
                      : "https://wa.me/51948573972"
                  }
                >
                  <button type="button" className={styles.button}>
                    <Image className={styles.wsIcon} alt="" src={wsIcon} />
                    Enviar
                  </button>
                </Link>
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
