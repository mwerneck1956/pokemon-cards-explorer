import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function PokemonDetails() {
  const router = useRouter();
  const { pokemon } = router.query;

  return <div>{pokemon}</div>;
}
