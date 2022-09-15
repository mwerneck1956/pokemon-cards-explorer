/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { fetchPokemons } from "../../endpoints/fetchPokemons";
import { PokemonCardProps } from "../PokemonCard/PokemonCard.interfaces";
import PokemonCard from "../PokemonCard";

export function PokemonList() {
  const [pokemonsCards, setPokemonsCards] = useState<Array<PokemonCardProps>>(
    []
  );

  useEffect(() => {
    async function getPokemons() {
      try {
        const pokemons = await fetchPokemons();

        console.log("Pokemãos", pokemons);

        setPokemonsCards(pokemons.data);

        console.log(pokemons);
      } catch (err) {
        console.log(err);
      }
    }

    getPokemons();
  }, []);

  const renderPokemonCards = () =>
    pokemonsCards.map((pokemonCardData) => (
      <PokemonCard key={pokemonCardData.id} {...pokemonCardData} />
    ));

  return (
    <div className={styles["pokemon-list-container"]}>
      {renderPokemonCards()}
    </div>
  );
}

export default PokemonList;
