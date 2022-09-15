import axios, { Axios } from "axios";

//const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";

export const pokemontcgApi: Axios = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
});
