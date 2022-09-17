import React, { createContext, useState, useCallback } from "react";
import { fetchPokemons, IFetchPokemonParams } from "../endpoints/fetchPokemons";
import { PokemonCardProps } from "../components/PokemonCard/PokemonCard.interfaces";
interface IPokemonCardsContext {
  pokemonCards: Array<PokemonCardProps>;
  getPokemons: (params: IFetchPokemonParams) => void;
  isLoading: boolean;
}
interface IPokemonCardsContextProvider {
  children: React.ReactNode;
}

export const PokemonCardsContext = createContext<IPokemonCardsContext>({});

export function PokemonCardsContextProvider({
  children,
}: IPokemonCardsContextProvider) {
  const [pokemonCards, setPokemonsCards] = useState<PokemonCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requistionError, setRequisitionError] = useState<boolean>(false);

  const getPokemons = useCallback(async (params: IFetchPokemonParams) => {
    try {
      setIsLoading(true);

      const pokemons = await fetchPokemons({
        q: params?.q,
        page: params?.page || 1,
        pageSize: params?.pageSize || 20,
      });

      setPokemonsCards(pokemons.data);
    } catch (err) {
      setRequisitionError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

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
