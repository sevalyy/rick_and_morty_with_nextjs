import Head from "next/head";
import styles from "../styles/Home.module.css";
import MasterPage from "../components/masterPage";
import Image from "next/image";
import Link from "next/link";

export default function Home({ characters }) {
  return (
    <MasterPage>
      <div className={styles.container}>
        <Head>
          <title>Rick and Morty</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Rick and Morty's World!</h1>
          <h2>Click character to see details</h2>

          <div>
            <ul className={styles.grid}>
              {characters.map((c) => (
                <Link href="/" key={c.id}>
                  <li key={c.id} className={styles.card}>
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={150}
                      height={150}
                    />
                    <br />
                    <h2>{c.name}</h2>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </MasterPage>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const resObj = await res.json();
  const characters = resObj.results;
  console.log("characters", characters);
  return {
    props: {
      characters,
    },
  };
}
