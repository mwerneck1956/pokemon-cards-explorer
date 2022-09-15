import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import PokemonCard from "../components/PokemonCard";
import { pokemonDataMock } from "../mocks";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} container`}>
      <Head>
        <title> Pokedex </title>
        <meta name="description" content="A simple pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonCard {...pokemonDataMock} />
    </div>
  );
};

export default Home;
