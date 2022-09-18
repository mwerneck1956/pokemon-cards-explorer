import { ReactNode } from "react";
import Link from "next/link";
import PokemonCardImage from "./CardImage";
import styles from "./styles.module.scss";

import { PokemonCardProps } from "./PokemonCard.interfaces";

export function PokemonCard(props: PokemonCardProps) {
  const {
    id,
    images,
    name,
    types,
    imageSize,
    weaknesses,
    resistances,
    showWeaknesses,
    showResistences,
  } = props;

  const renderPokemonTypes = (): ReactNode => (
    <ul
      aria-label="pokemon-types"
      className={styles["pokemon-card-container__description__types"]}
    >
      {types?.map((type) => (
        <li key={type} className={`pokemon-card ${type.toLowerCase()}`}>
          {type}
        </li>
      ))}
    </ul>
  );

  const renderPokemonResistences = (): ReactNode => (
    <>
      <strong> Resistências </strong>
      <ul
        aria-label="pokemon-resistances"
        className={styles["pokemon-card-container__description__types"]}
      >
        <div>
          {resistances.map(({ type, value }) => (
            <li key={type} className={`pokemon-card ${type.toLowerCase()}`}>
              {type} : {value}
            </li>
          ))}
        </div>
      </ul>
    </>
  );

  const renderPokemonWeaknesses = (): ReactNode => (
    <>
      <strong> Fraquezas </strong>
      <ul
        aria-label="pokemon-weaknesses"
        className={styles["pokemon-card-container__description__types"]}
      >
        <div>
          {weaknesses.map(({ type, value }) => (
            <li key={type} className={`pokemon-card ${type.toLowerCase()}`}>
              {type} : {value}
            </li>
          ))}
        </div>
      </ul>
    </>
  );

  return (
    <Link href={`pokemonDetails/${id}`}>
      <li
        className={styles["pokemon-card-container"]}
        aria-label={`${name}-card`}
      >
        <PokemonCardImage src={images[imageSize]} alt={`${name}-card`} />
        <div className={styles["pokemon-card-container__description"]}>
          <small className={styles["pokemon-card-container__description__id"]}>
            {id}
          </small>
          <h3 className={styles["pokemon-card-container__description__name"]}>
            {name}
          </h3>
          {renderPokemonTypes()}
          {weaknesses && showWeaknesses && renderPokemonWeaknesses()}
          {resistances && showResistences && renderPokemonResistences()}
        </div>
      </li>
    </Link>
  );
}

export default PokemonCard;
