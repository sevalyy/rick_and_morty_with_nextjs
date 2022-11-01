import React from "react";
import Image from "next/image";
import styles from "../styles/character.module.css";

function SingleCharacter({ character }) {
  return (
    <div>
      {" "}
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

          {/* arraydeki her elementin 40'dan sonraki karakterini al */}
          <p className={(styles.episode, styles.card)}>
            Episode:
            {character.episode.map((episo) => (
              <span key={character.id}>{episo.slice(40)} - </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCharacter;
