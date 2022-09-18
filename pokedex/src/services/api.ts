import axios, { Axios } from "axios";

process.env.NEXT_PUBLIC_X_API_KEY;

export const pokemontcgApi: Axios = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
  headers: {
    "X-Api-Key": "7b186217-ecfe-4956-9abb-d44a76ecad68",
  },
});
