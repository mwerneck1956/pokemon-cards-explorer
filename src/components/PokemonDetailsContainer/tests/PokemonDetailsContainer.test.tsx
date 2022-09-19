import { ReactNode } from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { mswServer } from "../../../mocks/msw/mswServer";
import { PokemonCardsContextProvider } from "../../../contexts/pokemonCardsContext";
import { PokemonDetailsContainer } from "../index";
import { pokemonDataMock } from "../../../mocks/data/pokemonCardList";

interface WrapperProps {
  children: ReactNode;
}

const wrapper = ({ children }: WrapperProps) => (
  <PokemonCardsContextProvider>{children}</PokemonCardsContextProvider>
);

describe("PokemonListing tests", () => {
  it("Show a loader when is fetching the pokemon card, and when the requistion finishes, the loader is removed from the DOM", async () => {
    render(<PokemonDetailsContainer pokemonId="pl1-1" />, { wrapper });

    expect(screen.getByLabelText("pokemon-details-loader")).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.getByLabelText("pokemon-details-loader")
    );
  });

  it("Shows a error message when the fetchSpecificPokemons request fails", async () => {
    const errorFetchPokemonsHandler = rest.get(
      "https://api.pokemontcg.io/v2/cards/pl1-1",
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    );
    mswServer.resetHandlers(errorFetchPokemonsHandler);

    render(<PokemonDetailsContainer pokemonId="pl1-1" />, { wrapper });

    expect(
      await screen.findByText(/Internal error, try again later/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
