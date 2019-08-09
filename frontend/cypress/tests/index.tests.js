/* globals cy */
describe("Testing Inputs and Select", () => {
    it("can change inputs and select options", () => {
        cy.visitPage("32", "3", "2", "491.67");
    });
});

describe("Can interact with API", () => {
    it("can post and render invalid response in UI", () => {
        cy.callAPI("32", "3", "7", "491.67", "invalid");
    });
    it("can post and render correct response in UI", () => {
        cy.callAPI("32", "3", "2", "491.7", "correct");
    });
    it("can post and render incorrect response in UI", () => {
        cy.callAPI("32", "3", "2", "491.8", "incorrect");
    });
});
