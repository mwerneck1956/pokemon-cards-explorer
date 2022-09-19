import { useRouter } from "next/router";
import { useState } from "react";
import { Navbar } from "../../components/common/Navbar";
import { PokemonDetailsContainer } from "../../components/PokemonDetailsContainer";
import { PokemonCardsContextProvider } from "../../contexts/pokemonCardsContext";
import styles from "./styles.module.scss";

export default function PokemonDetails() {
  const router = useRouter();
  const { pokemon } = router.query;

  return (
    <PokemonCardsContextProvider>
      <Navbar />
      <PokemonDetailsContainer pokemonId={pokemon} />
    </PokemonCardsContextProvider>
  );
}
