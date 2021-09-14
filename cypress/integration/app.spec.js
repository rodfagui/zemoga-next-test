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
      cy.viewport(1442, 920);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("http://localhost:3000/");
      });
      describe("nav", () => {
        it("Should contains a visible Link with text 'Past trials'", () => {
          cy.get("nav > a").contains("Past trials").should("be.visible");
        });

        it("Should contains a visible Link with text 'How It Works'", () => {
          cy.get("nav > a").contains("How It Works").should("be.visible");
        });

        it("Should contains a visible Link with text 'Login / Sign Up'", () => {
          cy.get("nav > a").contains("Login / Sign Up").should("be.visible");
        });

        it("Should contains a not visible hamburger button image", () => {
          cy.get("nav img").should("not.be.visible");
        });
      });
    });
  });
  context("Mobile device", () => {
    beforeEach(() => {
      cy.viewport(375, 750);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("http://localhost:3000/");
      });
      describe("nav", () => {
        it("Should contains a not visible Link with text 'Past trials'", () => {
          cy.get("nav > a").contains("Past trials").should("not.be.visible");
        });

        it("Should contains a not visible Link with text 'How It Works'", () => {
          cy.get("nav > a").contains("How It Works").should("not.be.visible");
        });

        it("Should contains a not visible Link with text 'Login / Sign Up'", () => {
          cy.get("nav > a")
            .contains("Login / Sign Up")
            .should("not.be.visible");
        });

        it("Should contains a visible hamburger button image", () => {
          cy.get("nav img").should("be.visible");
        });
      });
    });
  });
  context("Tablet device", () => {
    beforeEach(() => {
      cy.viewport(800, 750);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("http://localhost:3000/");
      });
      describe("nav", () => {
        it("Should contains a not visible Link with text 'Past trials'", () => {
          cy.get("nav > a").contains("Past trials").should("not.be.visible");
        });

        it("Should contains a not visible Link with text 'How It Works'", () => {
          cy.get("nav > a").contains("How It Works").should("not.be.visible");
        });

        it("Should contains a not visible Link with text 'Login / Sign Up'", () => {
          cy.get("nav > a")
            .contains("Login / Sign Up")
            .should("not.be.visible");
        });

        it("Should contains a visible hamburger button image", () => {
          cy.get("nav img").should("be.visible");
        });
      });
    });
  });
});
