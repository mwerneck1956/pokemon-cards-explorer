import { useEffect, useState, useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Oval as Loader } from "react-loader-spinner";
import { PokemonCardsContext } from "../../contexts/pokemonCardsContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PokemonCard from "../PokemonCard";
import styles from "./styles.module.scss";

export function PokemonList() {
  const { getPokemons, isLoading, pokemonCards, noResultsFound } =
    useContext(PokemonCardsContext);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    getPokemons({ pageSize: 20 });
  }, [getPokemons]);

  const renderPokemonCards = () =>
    pokemonCards.map((pokemonCardData) => (
      <PokemonCard key={pokemonCardData.id} {...pokemonCardData} />
    ));

  if (noResultsFound)
    return (
      <strong> Não foram encontrados resultadas para o termo buscado </strong>
    );

  return (
    <>
      {isLoading ? (
        <Loader
          wrapperClass={styles["pokemon-list-loader"]}
          ariaLabel="pokemons-list-loader"
        />
      ) : (
        <>
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
              <ul aria-label="pokemon-list-container">
                {renderPokemonCards()}
              </ul>
            </Carousel>
          </MobileView>
        </>
      )}
    </>
  );
}

export default PokemonList;
