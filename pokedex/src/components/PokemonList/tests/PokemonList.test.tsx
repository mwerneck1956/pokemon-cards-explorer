import { ReactNode } from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
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
});
