import { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import styles from "./styles.module.scss";

interface Props {
  type: "error";
  message: string;
  onClose: () => void;
  timeout?: number;
}

const typesClassName = {
  error: styles["alert-container--error"],
};

export function Alert({ message, type, onClose, timeout = 5000 }: Props) {
  useEffect(() => {
    const alertFadeOutTimeout = setTimeout(() => {
      onClose();
    }, timeout);

    return () => clearTimeout(alertFadeOutTimeout);
  }, [onClose, timeout]);

  return (
    <div className={`${styles["alert-container"]} ${typesClassName[type]}`}>
      <BiErrorCircle /> <strong>{message}</strong>
    </div>
  );
}
