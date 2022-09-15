import styles from "./styles.module.scss";
import { PokemonCardProps } from "./PokemonCard.interfaces";

export function PokemonCard(props: PokemonCardProps) {
  const { id, images, name, types } = props;

  const renderPokemonTypes = () => (
    <>
      {types.map((type) => (
        <span
          className={`${
            styles["pokemon-card-container__type"]
          }  ${type.toLowerCase()}`}
          key={type}
        >
          {type}
        </span>
      ))}
    </>
  );

  return (
    <li className={styles["pokemon-card-container"]}>
      <h3 className={styles["pokemon-card-container__name"]}>{name}</h3>
      <img
        className="pokemon-card-container__img"
        src={images.small}
        loading="lazy"
        alt={name}
      />
      <figcaption className={styles["pokemon-card-container__caption"]}>
        {id}
      </figcaption>

      {renderPokemonTypes()}
    </li>
  );
}

export default PokemonCard;
