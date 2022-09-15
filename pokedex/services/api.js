const axios = require("axios");

//const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";

export const pokemontcgApi = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
});
