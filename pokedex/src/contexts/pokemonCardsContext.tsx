import React, { createContext, useState, useCallback } from "react";
import {
  fetchPokemons,
  IFetchPokemonParams,
  IFetchPokemonsResponse,
} from "../endpoints/fetchPokemons";
import { PokemonCardProps } from "../components/PokemonCard/PokemonCard.interfaces";
interface IPokemonCardsContext {
  pokemonCards: Array<PokemonCardProps>;
  getPokemons: (params: IFetchPokemonParams) => void;
  isLoading: boolean;
  noResultsFound: boolean;
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
  const [noResultsFound, setNoResultsFound] = useState<boolean>(false);

  const onGetPokemonsOk = useCallback(
    ({ data, totalCount }: IFetchPokemonsResponse) => {
      setPokemonsCards(data);

      if (totalCount === 0) setNoResultsFound(true);
      else setNoResultsFound(false);
    },
    []
  );

  const onGetPokemonsNotOk = useCallback((error: Error) => {
    setRequisitionError(true);
  }, []);

  const getPokemons = useCallback(
    async (params: IFetchPokemonParams) => {
      try {
        setIsLoading(true);

        const response = await fetchPokemons({
          q: params?.q,
          page: params?.page || 1,
          pageSize: params?.pageSize || 20,
        });

        onGetPokemonsOk(response);
      } catch (err) {
        if (err instanceof Error) onGetPokemonsNotOk(err);
      } finally {
        setIsLoading(false);
      }
    },
    [onGetPokemonsNotOk, onGetPokemonsOk]
  );

  return (
    <PokemonCardsContext.Provider
      value={{
        getPokemons,
        pokemonCards,
        isLoading,
        noResultsFound,
      }}
    >
      {children}
    </PokemonCardsContext.Provider>
  );
}
