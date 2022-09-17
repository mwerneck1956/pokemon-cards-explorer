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
    getPokemons({});
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
        <Loader wrapperClass={styles["pokemon-list-loader"]} />
      ) : (
        <>
          <BrowserView>
            <div className={styles["pokemon-list-container"]}>
              {renderPokemonCards()}
            </div>
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
      )}
    </>
  );
}

export default PokemonList;
