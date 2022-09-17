import React, { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PokemonCardsContext } from "../../../../contexts/pokemonCardsContext";
import styles from "./styles.module.scss";

const DEBOUNCE_TIMEOUT_MS = 500;

export default function SearchBox() {
  const [search, setSearchValue] = useState<string>("");
  const { getPokemons } = useContext(PokemonCardsContext);

  useEffect(() => {
    if (search) {
      const timeout = setTimeout(() => {
        getPokemons({
          q: `name:${search}*`,
        });
      }, DEBOUNCE_TIMEOUT_MS);

      return () => clearTimeout(timeout);
    }
  }, [search, getPokemons]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles["search-container"]}>
      <input onChange={onInputChange} placeholder="Digite o nome do pokemon" />
      <FiSearch />
    </div>
  );
}
