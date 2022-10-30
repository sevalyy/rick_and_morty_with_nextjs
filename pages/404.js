import Link from "next/link";
import React from "react";
import styles from "../styles/404.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      The page you are looking for is not found
      <div> Return to the Homepage</div>
      <Link href="/">Click Here</Link>
    </div>
  );
}

export default NotFound;
