import { useContext, useEffect, useState } from "react";
import { Oval as Loader } from "react-loader-spinner";
import { Alert } from "../common/Alert";
import { PokemonCardsContext } from "../../contexts/pokemonCardsContext";
import PokemonCard from "../PokemonCard";
import styles from "./styles.module.scss";
interface Props {
  pokemonId?: string;
}

export function PokemonDetailsContainer({ pokemonId }: Props) {
  const { currentPokemonCard, getSpecificPokemon, isLoading, requistionError } =
    useContext(PokemonCardsContext);

  const [isAlertVisible, setIsAlertVisible] = useState(requistionError);

  useEffect(() => {
    if (pokemonId) getSpecificPokemon(pokemonId);
  }, [pokemonId, getSpecificPokemon]);

  useEffect(() => {
    setIsAlertVisible(requistionError);
  }, [requistionError]);

  return (
    <div className="container d-flex-centered">
      {isAlertVisible && (
        <Alert
          type="error"
          message="Internal error, try again later"
          onClose={() => setIsAlertVisible(false)}
        />
      )}
      {!isLoading ? (
        <div className={styles["emphasis-pokemon-card-container"]}>
          {currentPokemonCard && (
            <PokemonCard
              {...currentPokemonCard}
              imageSize="large"
              showWeaknesses={true}
              showResistences={true}
              showAttacks={true}
              disableOnClick={true}
              additionalClassName={styles["emphasis-pokemon-card-container"]}
            />
          )}
        </div>
      ) : (
        <Loader
          wrapperClass={styles["emphasis-pokemon-card-loader"]}
          ariaLabel="pokemon-details-loader"
        />
      )}
    </div>
  );
}
