import React, { createContext, useState } from "react";
import { fetchPokemons, IFetchPokemonParams } from "../endpoints/fetchPokemons";
import { PokemonCardProps } from "../components/PokemonCard/PokemonCard.interfaces";

export const PokemonCardsContext = createContext<IPokemonCardsContext>({});

interface IPokemonCardsContext {
  pokemonCards: Array<PokemonCardProps>;
  getPokemons: (params: IFetchPokemonParams) => void;
  isLoading: boolean;
}

interface IPokemonCardsContextProvider {
  children: React.ReactNode;
}

export function PokemonCardsContextProvider({
  children,
}: IPokemonCardsContextProvider) {
  const [pokemonCards, setPokemonsCards] = useState<PokemonCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getPokemons(params: IFetchPokemonParams) {
    try {
      setIsLoading(true);

      const pokemons = await fetchPokemons({
        q: params?.q,
        page: params?.page || 1,
        pageSize: params?.pageSize || 20,
      });

      setPokemonsCards(pokemons.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PokemonCardsContext.Provider
      value={{
        getPokemons,
        pokemonCards,
        isLoading,
      }}
    >
      {children}
    </PokemonCardsContext.Provider>
  );
}
