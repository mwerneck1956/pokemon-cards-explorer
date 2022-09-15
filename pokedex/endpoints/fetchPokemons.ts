import { pokemontcgApi } from "../services/api";

export async function fetchPokemons() {
  try {
    const response = await pokemontcgApi.get("/cards");

    return response.data;
  } catch (err) {
    console.log(err);

    if (err instanceof Error) throw new Error(err.message);
  }
}
