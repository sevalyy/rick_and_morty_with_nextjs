import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">Homepage</Link>
      <Link href="/about">About Us </Link>
    </div>
  );
}

export default NavBar;
