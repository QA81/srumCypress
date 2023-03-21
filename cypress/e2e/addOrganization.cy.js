/// <reference types="Cypress"/>

import {
    addOrganizationPage
} from "../POM/addOrganizationPage";

describe(" add organization test", () => {
    beforeEach("login via backend", () => {
        cy.loginViaBackend()
        cy.visit("/my-organizations")
    });

    it(" add new organizations", () => {
        addOrganizationPage.addOrganization.click()
        addOrganizationPage.newOrganizationHeader.should("contain", "New Organization")
        addOrganizationPage.organizationInput.type("scrum test")
        addOrganizationPage.actionBtn.click()
        addOrganizationPage.newOrganizationHeader.should("have.text"," scrum test")
        addOrganizationPage.actionBtn.click()
        cy.get("button").contains("OK").click();
        cy.url().should("include","/organizations")
    })


})