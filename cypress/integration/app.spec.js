describe("Check heading of Home Page", () => {
  it("should navigate to the home page and find heading div", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // The home page should contain a div with heading role with "Rule of thumb."
    cy.get(`[role="heading"]`).contains("Rule of thumb.");
  });
});

describe("Check navbar", () => {
  // For desktop view
  context("Desktop device", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("http://localhost:3000/");
      });
      describe("nav", () => {
        it("Should contains a Link with value 'Past trials'", () => {
          cy.get("nav > a").contains("Past trials");
        });

        it("Should contains a Link with value 'How It Works'", () => {
          cy.get("nav > a").contains("How It Works");
        });

        it("Should contains a Link with value 'Login / Sign Up'", () => {
          cy.get("nav > a").contains("Login / Sign Up");
        });
      });
    });
  });
});
