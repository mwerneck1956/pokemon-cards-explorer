import { ReactNode, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Link from "next/link";
import PokemonCardImage from "./CardImage";
import { AttacksModal } from "./AttacksModal";

import styles from "./styles.module.scss";

import { PokemonCardProps } from "./PokemonCard.interfaces";

export function PokemonCard(props: PokemonCardProps) {
  const {
    attacks,
    additionalClassName,
    id,
    images,
    name,
    types,
    imageSize,
    weaknesses,
    resistances,
    showWeaknesses,
    showResistences,
    showAttacks,
    disableOnClick,
  } = props;

  const [isAttackModalOpen, setIsAttackModalOpen] = useState<boolean>(false);

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
      <strong> Resistences </strong>
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
      <strong> Weaknesses </strong>
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

  const renderAttacksModalButton = (): ReactNode => (
    <button
      className={
        styles["pokemon-card-container__description__open-attacks-modal-btn"]
      }
      onClick={() => setIsAttackModalOpen(true)}
    >
      See attacks
    </button>
  );

  const toggleAttacksModal = () => {
    setIsAttackModalOpen(!isAttackModalOpen);
  };

  const renderContent = (): ReactNode => (
    <li
      className={`${additionalClassName} ${styles["pokemon-card-container"]}  ${
        disableOnClick
          ? styles["pokemon-card-container--disabled-on-click"]
          : ""
      }`}
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
        {attacks && showAttacks && renderAttacksModalButton()}
        <AttacksModal
          name={name}
          toggleAttacksModal={toggleAttacksModal}
          attacks={attacks}
          isAttackModalOpen={isAttackModalOpen}
        />
      </div>
    </li>
  );

  return !disableOnClick ? (
    <Link href={`pokemonDetails/${id}`}>{renderContent()}</Link>
  ) : (
    <a className="w-100">{renderContent()}</a>
  );
}

//@Todo mudar para React.Memo
export default PokemonCard;
