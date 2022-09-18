import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function PokemonDetails() {
  const router = useRouter();
  const { pokemon } = router.query;

  return <div>{pokemon}</div>;
}
