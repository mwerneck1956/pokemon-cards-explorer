import { pokemonDataMock } from "../../src/mocks/data/pokemonCardList";

describe("Pokemon details flux e2e test", () => {
  it("Tests the pokemon details page", () => {
    cy.viewport("macbook-13");

    cy.visit("http://localhost:3000");

    cy.intercept("GET", "cards*", {
      statusCode: 200,
      body: pokemonDataMock,
    }).as("fetchPokemons");

    cy.get(`[aria-label="Amphaross-card"]`).click();

    cy.url().should("include", "/pokemonDetails/pl1-1");

    cy.get('[aria-label="pokemon-details-loader"]');
    cy.get('button:contains("See attacks")').click();

    cy.get("h3").contains("Attacks");
    cy.get(".ReactModal__Overlay");

    cy.get("#close-attacks-modal").click();
    cy.get(".ReactModal__Overlay").should("not.exist");

    cy.get(`[aria-label="go-back-button"]`).click();
    cy.url().should("not.include", "/pokemonDetails");
  });
});
