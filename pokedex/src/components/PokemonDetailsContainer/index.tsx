import { useContext, useEffect } from "react";
import { PokemonCardsContext } from "../../contexts/pokemonCardsContext";
import PokemonCard from "../PokemonCard";

interface Props {
  pokemonId?: string;
}

export function PokemonDetailsContainer({ pokemonId }: Props) {
  const { currentPokemonCard, getSpecificPokemon } =
    useContext(PokemonCardsContext);

  useEffect(() => {
    if (pokemonId) getSpecificPokemon(pokemonId);
  }, [pokemonId, getSpecificPokemon]);

  return (
    <div className="container">
      {currentPokemonCard && (
        <PokemonCard
          {...currentPokemonCard}
          imageSize="large"
          showWeaknesses={true}
          showResistences={true}
        />
      )}
    </div>
  );
}
