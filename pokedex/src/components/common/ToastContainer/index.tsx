import { ToastContainer as ToastCustomContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";

export function ToastContainer() {
  return <ToastCustomContainer className={styles["toast-container"]} />;
}
