import { useContext, useEffect } from "react";
import { PokemonCardsContext } from "../../contexts/pokemonCardsContext";
import PokemonCard from "../PokemonCard";
import styles from "./styles.module.scss";
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
    <div className="container d-flex-centered">
      <div className={styles["emphasis-pokemon-card-container"]}>
        {currentPokemonCard && (
          <PokemonCard
            {...currentPokemonCard}
            imageSize="large"
            showWeaknesses={true}
            showResistences={true}
            showAttacks={true}
            disableOnClick={true}
          />
        )}
      </div>
    </div>
  );
}
