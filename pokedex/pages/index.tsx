import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import { Navbar } from "../components/common/Navbar";
import { pokemonDataMock } from "../mocks";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Pokedex </title>
        <meta name="description" content="A simple pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`${styles.container} container`}>
        <PokemonList />
      </div>
    </>
  );
};

export default Home;
