/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SearchBox from "./components/SearchBox";
import styles from "./styles.module.scss";

export function Navbar() {
  const router = useRouter();

  const isSearchBoxVisible = !router.pathname.includes("pokemonDetails");

  const goBackButton = () => (
    <Link href="/">
      <button className={styles["navbar__container__goBackButton"]}>
        <AiOutlineArrowLeft />
        Go back
      </button>
    </Link>
  );

  return (
    <header className={styles.navbar}>
      <div className={`${styles.navbar__container} container`}>
        <div className={styles.navbar__container__logoContainer}>
          <Link href="/">
            <img
              className={
                styles["navbar__container__logoContainer__img--mobile"]
              }
              src="/images/pokemon-logo-mobile.png"
              alt="Pokemon Trading Card Game"
            />
          </Link>
          <Link href="/">
            <img
              className={
                styles["navbar__container__logoContainer__img--desktop"]
              }
              src="/images/pokemon-tcg-logo.svg"
              alt="Pokemon Trading Card Game"
            />
          </Link>
        </div>
        {isSearchBoxVisible ? <SearchBox /> : goBackButton()}
      </div>
    </header>
  );
}
