import Head from "next/head";
import styles from "../styles/Home.module.css";
import MasterPage from "../components/MasterPage";
import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";

export default function Home({ characters }) {
  return (
    <MasterPage>
      <div className={styles.container}>
        <Head>
          <title className={styles.title}>Rick and Morty</title>
        </Head>

        <main className={styles.main}>
          <CharacterList characters={characters} />
        </main>
      </div>
    </MasterPage>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const resObjet = await res.json();
  const characters = resObjet.results;
  console.log("characters", characters);
  return {
    props: {
      characters,
    },
  };
}
