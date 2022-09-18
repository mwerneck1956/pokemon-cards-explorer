import { pokemontcgApi } from "../services/api";
import { PokemonCardProps } from "../components/PokemonCard/PokemonCard.interfaces";

export interface IFetchPokemonParams {
  q?: string;
  page?: number;
  pageSize?: number;
}
export interface IFetchPokemonsResponse {
  count: number;
  page: number;
  pageSize: number;
  totalCount: number;
  data: Array<PokemonCardProps>;
}

export async function fetchPokemons(
  params: IFetchPokemonParams
): Promise<IFetchPokemonsResponse> {
  try {
    const response = await pokemontcgApi.get("/cards", {
      params: {
        pageSize: params?.pageSize,
        page: params?.page,
        q: params.q,
      },
    });

    return response.data;
  } catch (err) {
    let errMessage = "";
    if (err instanceof Error) errMessage = err.message;

    throw new Error(errMessage);
  }
}
