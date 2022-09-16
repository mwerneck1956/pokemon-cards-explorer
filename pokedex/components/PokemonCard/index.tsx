/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

import { PokemonCardProps } from "./PokemonCard.interfaces";

export function PokemonCard(props: PokemonCardProps) {
  const { id, images, name, types } = props;

  const renderPokemonTypes = (): ReactNode => (
    <ul
      aria-label="pokemon-types"
      className={styles["pokemon-card-container__description__types"]}
    >
      {types.map((type) => (
        <li key={type} className={`pokemon-card ${type.toLowerCase()}`}>
          {type}
        </li>
      ))}
    </ul>
  );

  return (
    <Link href={`pokemonDetails/${id}`}>
      <li
        className={styles["pokemon-card-container"]}
        aria-label={`${name}-card`}
      >
        <div className={styles["pokemon-card-container__img-container"]}>
          <img src={images.small} loading="lazy" alt={name} />
        </div>

        <div className={styles["pokemon-card-container__description"]}>
          <small className={styles["pokemon-card-container__description__id"]}>
            {id}
          </small>

          <h3 className={styles["pokemon-card-container__description__name"]}>
            {name}
          </h3>

          {renderPokemonTypes()}
        </div>
      </li>
    </Link>
  );
}

export default PokemonCard;
