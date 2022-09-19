describe("Pokemon details flux e2e test", () => {
  it("Tests the pokemon details page", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("Charmander");

    cy.get(`[aria-label="Amphaross-card"]`).click();

    cy.url().should("include", "/pokemonDetails/pl1-1");

    cy.get('[aria-label="pokemon-details-loader"]');
    cy.get('button:contains("See attacks")').click();

    cy.get("h3").contains("Attacks");
    cy.get(".ReactModal__Overlay");

    cy.get("#close-attacks-modal").click();
    cy.get(".ReactModal__Overlay").should("not.exist");
  });
});
