import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

// characters come from index.js as props

function CharacterList({ characters }) {
  const [search, setSearch] = useState("");
  const [filterByOption, setFilterByOption] = useState("All");

  const [filteredCharacters, setFilteredCharacters] = useState(null);

  useEffect(() => {
    let filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filterByOption !== "All") {
      filteredCharacters = filteredCharacters.filter(
        (n) => n.species.toLowerCase() === filterByOption.toLowerCase()
      );
    }

    setFilteredCharacters(filteredCharacters);
  }, [search, filterByOption, characters]);

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
          value={filterByOption}
          onChange={(e) => setFilterByOption(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </h3>
      <div>
        <ul className={styles.grid}>
          {filteredCharacters &&
            filteredCharacters.map((c) => (
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
