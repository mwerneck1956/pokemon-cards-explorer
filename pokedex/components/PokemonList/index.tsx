/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useContext } from "react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { fetchPokemons } from "../../endpoints/fetchPokemons";
import { PokemonCardProps } from "../PokemonCard/PokemonCard.interfaces";
import PokemonCard from "../PokemonCard";
import { PokemonCardsContext } from "../../contexts/pokemonCardsContext";
import styles from "./styles.module.scss";

export function PokemonList() {
  const { getPokemons, isLoading, pokemonCards } =
    useContext(PokemonCardsContext);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    getPokemons({});
  }, [getPokemons]);

  const renderPokemonCards = () =>
    pokemonCards.map((pokemonCardData) => (
      <PokemonCard key={pokemonCardData.id} {...pokemonCardData} />
    ));

  return (
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
  );
}

export default PokemonList;
