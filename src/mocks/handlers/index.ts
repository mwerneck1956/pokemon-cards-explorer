import { rest } from "msw";
import { pokemonDataMock } from "../data/pokemonCardList";
import { pokemonCardMock } from "../data/pokemonCard";

export const handlers = [
  rest.get("https://api.pokemontcg.io/v2/cards", async (req, res, ctx) => {
    return res(ctx.json(pokemonDataMock));
  }),
  rest.get("https://api.pokemontcg.io/v2/cards/", async (req, res, ctx) => {
    return res(ctx.json(pokemonCardMock));
  }),
];
