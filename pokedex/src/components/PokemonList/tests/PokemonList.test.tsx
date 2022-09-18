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
import { PokemonList } from "../";
import { pokemonDataMock } from "../../../mocks/data/pokemonCardList";

interface WrapperProps {
  children: ReactNode;
}

const wrapper = ({ children }: WrapperProps) => (
  <PokemonCardsContextProvider>{children}</PokemonCardsContextProvider>
);

describe("PokemonListing tests", () => {
  it("Show a loader when is fetching the pokemon cards, and when the requistion finishes, the loader is removed from the DOM", async () => {
    render(<PokemonList />, { wrapper });

    expect(screen.getByLabelText("pokemons-list-loader")).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.getByLabelText("pokemons-list-loader")
    );
  });

  it("Renders pokemon cards", async () => {
    render(<PokemonList />, { wrapper });

    const pokemonList = await screen.findByLabelText("pokemon-list-container");

    expect(pokemonList.childNodes.length).toEqual(10);
  });

  it("Displays the card image for each pokemon card", async () => {
    render(<PokemonList />, { wrapper });

    const pokemonCardImages: Array<HTMLImageElement> =
      await screen.findAllByRole("img", {
        name: /\w+-card/i,
      });

    const expectAltTexts = pokemonDataMock.data.map(
      (data) => `${data.name}-card`
    );
    const receivedAltTexts = pokemonCardImages.map((element) => element.alt);

    expect(receivedAltTexts).toEqual(expectAltTexts);
  });

  it("Shows a informative message when no results are found for the searched term", async () => {
    const emptyCardsHandler = rest.get(
      "https://api.pokemontcg.io/v2/cards",
      (req, res, ctx) => {
        return res(
          ctx.json({
            data: [],
            totalCount: 0,
          })
        );
      }
    );
    mswServer.resetHandlers(emptyCardsHandler);

    render(<PokemonList />, { wrapper });
    expect(
      await screen.findByText(
        /Não foram encontrados resultadas para o termo buscado/i
      )
    ).toBeInTheDocument();
  });

  it("Shows a error message when the fetchPokemons request fails", async () => {
    const errorFetchPokemonsHandler = rest.get(
      "https://api.pokemontcg.io/v2/cards",
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    );
    mswServer.resetHandlers(errorFetchPokemonsHandler);

    render(<PokemonList />, { wrapper });

    await waitFor(() =>
      screen.findByText(/Erro interno, tente novamente mais tarde/i)
    );

    expect(
      await screen.findByText(/Erro interno, tente novamente mais tarde/i, {
        exact: false,
      })
    );
  });
});
