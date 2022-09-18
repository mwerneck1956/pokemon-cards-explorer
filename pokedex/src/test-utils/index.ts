import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { PokemonCardsContextProvider } from "../contexts/pokemonCardsContext";

export const renderWithPokemonCardsContext = (
  ui: ReactElement,
  options?: RenderOptions
) => {
  render(ui, { wrapper, ...options });
};

// re-export everything
export * from "@testing-library/react";
