import Head from "next/head";
import React from "react";
import MasterPage from "../components/masterPage";

function About() {
  return (
    <MasterPage>
      <Head>
        <title>About Us</title>
      </Head>
      <br />
      About
      <br />
    </MasterPage>
  );
}

export default About;
