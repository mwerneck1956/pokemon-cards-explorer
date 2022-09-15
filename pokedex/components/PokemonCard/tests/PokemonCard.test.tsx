import { render, screen } from "@testing-library/react";
import { pokemonDataMock } from "../../../mocks";
import PokemonCard from "../index";

describe("Pokemon Card tests", () => {
  beforeEach(() => {
    render(<PokemonCard {...pokemonDataMock} />);
  });

  it("Renders the pokemon name and id", () => {
    expect(screen.getByText(pokemonDataMock.name)).toBeInTheDocument();
    expect(screen.getByText(pokemonDataMock.id)).toBeInTheDocument();
  });
});
