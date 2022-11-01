import Head from "next/head";
import React from "react";
import MasterPage from "../../components/masterPage";
import Image from "next/image";
import styles from "../../styles/character.module.css";

function CharacterDetails({ character }) {
  return (
    <MasterPage>
      <Head>
        <title>Character Details </title>
      </Head>{" "}
      <>
        <h1 className={styles.title}> {character.name}</h1>
        <div className={styles.main}>
          <div className={styles.flexChild}>
            <Image
              src={character.image}
              alt={character.name}
              width={350}
              height={350}
            />
          </div>
          <div className={styles.flexChild}>
            <p className={styles.card}>Species: {character.species}</p>
            <p className={styles.card}> Gender: {character.gender}</p>
            <p className={styles.card}>Alive or ☠️ ??? : {character.status} </p>
            <p className={styles.card}> Origin: {character.origin.name}</p>

            {/* arraydeki her elementin son iki harfini al ve yeni array yap */}
            <p className={(styles.episode, styles.card)}>
              Episode:
              {character.episode.map((episo) => (
                <span key={character.id}>{episo.slice(40)} - </span>
              ))}
            </p>
          </div>
        </div>
      </>
    </MasterPage>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const resObjet = await res.json();
  const characters = resObjet.results;
  return {
    // paths: [
    //     { params: { id: "1" } },
    //     { params: { id: "2" } }
    // ],
    // we need paths like above.
    // for getting id's as an object, map() its id.
    // id must be provided as a string, not number!

    paths: characters.map((c) => ({
      params: { id: `${c.id}` },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //take params from getStaticPaths()

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
}

export default CharacterDetails;
