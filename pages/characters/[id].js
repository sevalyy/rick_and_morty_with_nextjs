import Head from "next/head";
import React from "react";
import MasterPage from "../../components/masterPage";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function CharacterDetails({ character }) {
  return (
    <MasterPage>
      <Head>
        <title>Character Details </title>
      </Head>{" "}
      <div className={styles.main}>
        <Image
          src={character.image}
          alt={character.name}
          width={350}
          height={350}
        />
        <br />
        Name: {character.name}
        <br />
        Alive or ☠️ ??? : {character.status} <br />
        Species: {character.species} <br />
        Gender: {character.gender} <br />
      </div>
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
