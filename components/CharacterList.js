import React from "react";
import Link from "next/link";

import Image from "next/image";

import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

function CharacterList({ characters }) {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");

  const [names, setNames] = useState(null);

  useEffect(() => {
    let names = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedOption !== "All") {
      names = names.filter(
        (n) => n.species.toLowerCase() === selectedOption.toLowerCase()
      );
    }

    setNames(names);
  }, [search, selectedOption, characters]);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Rick and Morty World!</h1>
      <h2>Click character`s image to see details</h2>
      <h3>
        Search by Name:
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </h3>
      <h3 style={{ display: "flex" }}>
        <span>Filter by Species: </span>

        <select
          name="species"
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="All">All</option>

          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </h3>
      <div>
        <ul className={styles.grid}>
          {names &&
            names.map((c) => (
              <Link
                href="/characters/[id]"
                as={`/characters/${c.id}`}
                key={c.id}
              >
                <li key={c.id} className={styles.card}>
                  <Image src={c.image} alt={c.name} width={150} height={150} />
                  <br />
                  <h2>{c.name}</h2>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterList;
