import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { PokemonCardsContextProvider } from "../contexts/pokemonCardsContext";
import { Navbar } from "../components/common/Navbar";

const PokemonList = dynamic(() => import("../components/PokemonList"), {
  ssr: false,
});

const Home: NextPage = () => {
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
