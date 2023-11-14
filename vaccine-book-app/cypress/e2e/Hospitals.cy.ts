describe("Hospitals", () => {
  it("Should show video and 3 image", () => {
    // AT HOME PAGE

    cy.visit("/");

    cy.wait(2000);
    cy.wait(2000);
    cy.wait(2000);
    cy.get("video").should("exist");
    cy.get("video").should("have.prop", "paused", false);
    cy.get("#playButton").click();
    cy.get("video").should("have.prop", "paused", true);

    cy.get("#hospitalButton").click();
    cy.wait(2000);
    cy.wait(2000);
    cy.wait(2000);
    cy.get("img").should("have.length.greaterThan", 2);
  });
});
