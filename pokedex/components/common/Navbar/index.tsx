import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import SearchBox from "./components/SearchBox";
import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.navbar__container} container`}>
        <div className={styles.navbar__container__logoContainer}>
          <img
            className={styles["navbar__container__logoContainer__img--mobile"]}
            src="images/pokemon-logo-mobile.png"
            alt="Pokemon Trading Card Game"
          />
          <img
            className={styles["navbar__container__logoContainer__img--desktop"]}
            src="images/pokemon-tcg-logo.svg"
            alt="Pokemon Trading Card Game"
          />
        </div>
        <SearchBox />
        {/* <Link href="/">
          <button className={styles.navbar__container__goBackButton}>
            <FiArrowLeft /> Voltar
          </button>
        </Link> */}
      </div>
    </header>
  );
}
