/* globals cy */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { Arr } from "../../src/reuse/units";

// creating reusable commands to run the tests with
Cypress.Commands.add("visitPage", (input, select1, select2, answer) => {
    cy.visit("/")
        .get("#input1")
        // typing the value into that input
        .type(input)
        .should("have.value", input)
        .get("#select1")
        // selecting an option
        .select(Arr[select1].item)
        .should("have.value", `${Arr[select1].item},${Arr[select1].type}`)
        .get("#select2")
        .select(Arr[select2].item)
        .should("have.value", `${Arr[select2].item},${Arr[select2].type}`)
        .get("#input2")
        .type(answer)
        .should("have.value", answer);
});

Cypress.Commands.add("callAPI", (input, select1, select2, answer, response) => {
    // to push it to the page before running tests
    cy.visitPage(input, select1, select2, answer);
    cy.server();
    // stubbing the API
    cy.route({
        url: "/input",
        method: "POST",
        status: 200,
        response: { message: response }
    })
        .get("#output-text")
        .should("have.text", response);
});
