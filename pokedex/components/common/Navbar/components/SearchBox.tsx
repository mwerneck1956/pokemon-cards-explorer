import { FiSearch } from "react-icons/fi";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import styles from "./styles.module.scss";

export default function SearchBox() {
  return (
    <div className={styles["search-container"]}>
      <input placeholder="Digite o nome do pokemon" />
      <FiSearch />
    </div>
  );
}
