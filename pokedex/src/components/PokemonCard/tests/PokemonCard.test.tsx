import { fireEvent, render, screen } from "@testing-library/react";
import { pokemonDataMock } from "../../../mocks";
import PokemonCard from "../index";

describe("Pokemon Card tests", () => {
  beforeEach(() => {
    render(<PokemonCard {...pokemonDataMock} imageSize="small" />);
  });

  it("Renders the pokemon name and id", () => {
    expect(screen.getByText(pokemonDataMock.name)).toBeInTheDocument();
    expect(screen.getByText(pokemonDataMock.id)).toBeInTheDocument();
  });

  it("Renders pokemon types", () => {
    const typesEl = screen.getByRole("list");
    expect(typesEl.childNodes.length).toBe(2);

    const typesTitles: Array<string | null> = [];

    typesEl.childNodes.forEach((item) => {
      typesTitles.push(item.textContent);
    });

    expect(typesTitles).toEqual(pokemonDataMock.types);
  });

  it("The card should have a label with the pattern {pokemonName}-card", () => {
    const card = screen.getByRole("listitem", {
      name: `${pokemonDataMock.name}-card`,
    });

    expect(card).toBeInTheDocument();
  });
});
