import Link from "next/link";
import React from "react";
import MasterPage from "../components/MasterPage";
import styles from "../styles/404.module.css";

function NotFound() {
  return (
    <MasterPage>
      {/* combine jsx and imported styles */}
      <div className={`textColor ${styles.container} `}>
        The page you are looking for is not found
        <div> Return to the Homepage</div>
        <Link href="/">Click Here</Link>
        {/* jsx style */}
        <style jsx>{`
          .textColor {
            color: red;
          }
        `}</style>
      </div>
    </MasterPage>
  );
}

export default NotFound;
