import React from "react";
import Footer from "./footer";
import NavBar from "./navBar";

function MasterPage({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default MasterPage;
