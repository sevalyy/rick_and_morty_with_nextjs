import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function NavBar() {
  return (
    <div className={styles.navbar}>
      {" "}
      <Link href="/">Homepage</Link>
      <Image src="/Rick_and_Morty.png" alt="RaM logo" width={250} height={50} />
      <Link href="/about">About Us </Link>
    </div>
  );
}

export default NavBar;
