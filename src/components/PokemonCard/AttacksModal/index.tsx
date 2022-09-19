import { ReactNode, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { Attack } from "../PokemonCard.interfaces";
import styles from "./styles.module.scss";

interface Props {
  attacks: Array<Attack>;
  name: string;
  isAttackModalOpen: boolean;
  toggleAttacksModal: () => void;
}

export function AttacksModal(props: Props) {
  const { attacks, isAttackModalOpen, name, toggleAttacksModal } = props;

  return (
    <Modal
      overlayClassName={styles["attacks-modal--overlay"]}
      className={`${styles["attacks-modal"]}`}
      isOpen={isAttackModalOpen}
      onRequestClose={toggleAttacksModal}
    >
      <header className={styles["attacks-modal__header"]}>
        <h3>Attacks</h3>

        <AiOutlineCloseCircle
          onClick={toggleAttacksModal}
          id="close-attacks-modal"
        />
      </header>
      <ul className={styles["attacks-modal__attacks-list"]}>
        {attacks.map((attack, index) => (
          <li
            key={attack.name + index}
            className={styles["attacks-modal__attack"]}
          >
            <div className={styles["attacks-modal__attack__name-container"]}>
              <strong className="d-flex-centered">{attack.name}</strong>
              {attack.cost.map((cost, index) => (
                <div
                  key={cost + name + index}
                  className={`${
                    styles["attacks-modal__attack__name-container__type"]
                  } ${cost.toLowerCase()} pokemon-card-type  d-flex-centered`}
                >
                  {cost}
                </div>
              ))}
            </div>

            <span>
              Damage: <strong> {attack?.damage || "-"} </strong>
            </span>
            <p>Description : {attack.text}</p>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

//@Todo mudar para React.Memo
