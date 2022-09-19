describe("Pokemon listing  test", () => {
  it("Tests the pokemon details page", () => {
    cy.viewport("iphone-x");

    cy.intercept("GET", "https://api.pokemontcg.io/v2/cards*", {
      statusCode: 500,
    });

    cy.visit("http://localhost:3000");
    cy.get("input").type("Charmander");
  });
});
