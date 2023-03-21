class AddOrganizationPage {

    get addOrganization() {
        return cy.get(".vs-c-my-organization--add-new")
    }

    get newOrganization() {
        return cy.get(".vs-c-modal")
    }

    get newOrganizationHeader() {

        return cy.get(".vs-c-modal").find("h2")
    }

    get organizationInput() {
        return cy.get(".vs-c-modal").find("input")
    }

    get cancelBtn() {
        return cy.get("button").eq(1)
    }

    get actionBtn() {
        return cy.get("button").last()

    }

    addNewOrg(orgName){
        this.addOrganization.click()
        this.organizationInput.type(orgName)
        this.actionBtn.click()
        this.actionBtn.click()
    }



}

export const addOrganizationPage= new AddOrganizationPage()