import { rest } from "msw";
import { pokemonDataMock } from "../data/pokemonCardList";

export const handlers = [
  rest.get("https://api.pokemontcg.io/v2/cards", (req, res, ctx) =>
    res(ctx.json([]))
  ),
];
