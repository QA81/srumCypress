/// <reference types="Cypress"/>
import {
    addOrganizationPage
} from "../POM/addOrganizationPage";
import {
    archiveOrganizationPage
} from "../POM/archiveOrganizationPage";

describe("archive my organization test", () => {

    before("login via backend and add new organization", () => {
        let orgName = "test1"
        cy.loginViaBackend();
        cy.visit("/");
        addOrganizationPage.addNewOrg(orgName);
        cy.get("button").contains("OK").click()
    })

    it("archive organization", () => {
        archiveOrganizationPage.projectMenu.click()
        archiveOrganizationPage.archiveBtn.click()
    })
})