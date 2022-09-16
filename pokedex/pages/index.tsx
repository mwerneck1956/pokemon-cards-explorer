import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { PokemonCardsContextProvider } from "../contexts/pokemonCardsContext";
import PokemonList from "../components/PokemonList";
import { Navbar } from "../components/common/Navbar";

const Home: NextPage = () => {
  console.log("Chegaste");

  return (
    <PokemonCardsContextProvider>
      <Head>
        <title> Pokedex </title>
        <meta name="description" content="A simple pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`${styles.container} container`}>
        <PokemonList />
      </div>
    </PokemonCardsContextProvider>
  );
};

export default Home;
