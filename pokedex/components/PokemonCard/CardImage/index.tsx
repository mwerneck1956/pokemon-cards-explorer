/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  alt: string;
}

const Loader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={350}
    viewBox="0 0 250 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="350" />
  </ContentLoader>
);

export function PokemonCardImage(props: Props) {
  const { src, alt } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={styles["pokemon-card-img__container"]}>
      <img
        src={src}
        className={isImageLoaded ? "d-inline" : "d-none"}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
      />
      {!isImageLoaded && <Loader />}
    </div>
  );
}

export default PokemonCardImage;
