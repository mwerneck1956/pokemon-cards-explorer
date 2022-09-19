import { useEffect, useState, useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Oval as Loader } from "react-loader-spinner";
import { PokemonCardsContext } from "../../contexts/pokemonCardsContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PokemonCard from "../PokemonCard";
import { Alert } from "../common/Alert";
import styles from "./styles.module.scss";

export function PokemonList() {
  const {
    getPokemons,
    isLoading,
    requistionError,
    pokemonCards,
    noResultsFound,
  } = useContext(PokemonCardsContext);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAlertVisible, setIsAlertVisible] = useState(requistionError);

  const renderPokemonCards = () =>
    pokemonCards.map((pokemonCardData) => (
      <PokemonCard
        key={pokemonCardData.id}
        {...pokemonCardData}
        imageSize="small"
      />
    ));

  useEffect(() => {
    getPokemons({ pageSize: 20 });
  }, [getPokemons]);

  useEffect(() => {
    setIsAlertVisible(requistionError);
  }, [requistionError]);

  if (isLoading) {
    return (
      <Loader
        wrapperClass={styles["pokemon-list-loader"]}
        ariaLabel="pokemons-list-loader"
      />
    );
  }

  if (noResultsFound)
    return (
      <strong className={styles["pokemons-list-no-groups-found"]}>
        No results were found for the search term.
      </strong>
    );

  return (
    <>
      {isAlertVisible && (
        <Alert
          type="error"
          message="Internal error, try again later"
          onClose={() => setIsAlertVisible(false)}
        />
      )}

      <BrowserView>
        <ul
          className={styles["pokemon-list-container"]}
          aria-label="pokemon-list-container"
        >
          {renderPokemonCards()}
        </ul>
      </BrowserView>
      <MobileView>
        <Carousel
          showThumbs={false}
          onChange={(index: number) => setCurrentCardIndex(index)}
          showIndicators={false}
          showStatus={false}
        >
          {renderPokemonCards()}
        </Carousel>
      </MobileView>
    </>
  );
}

export default PokemonList;
