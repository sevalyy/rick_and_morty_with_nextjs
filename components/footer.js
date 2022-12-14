import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <div>
      {" "}
      <footer className={styles.footer}>
        <a href="/about" target="_blank" rel="noopener noreferrer">
          Powered by SEVAL &
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
