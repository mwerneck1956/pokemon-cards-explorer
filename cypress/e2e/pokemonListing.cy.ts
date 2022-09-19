import { pokemonDataMock } from "../../src/mocks/data/pokemonCardList";

describe("Pokemon listing  test", () => {
  it("Tests the pokemon details page", () => {
    cy.viewport("iphone-x");

    cy.intercept("GET", "cards*", {
      statusCode: 500,
    });

    cy.visit("http://localhost:3000");
    cy.get("div").contains("Internal error, try again later");

    cy.intercept("GET", "cards*", {
      statusCode: 200,
      body: pokemonDataMock,
    });

    cy.get("input").type("Charmander");

    cy.get("h3").contains("Amphaross");
    cy.get("small").contains("pl1-1");

    cy.intercept("GET", "cards*", {
      statusCode: 200,
      body: {
        totalCount: 0,
        data: [],
      },
    });

    cy.get("input").clear();
    cy.get("input").type("test");

    cy.get("strong").contains("No results were found for the search term");
  });
});
