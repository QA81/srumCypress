class ArchiveOrganizationPage{

    get projectMenu(){
        return cy.get(".vs-c-list").find("li").last()
    

    }

    get archiveBtn(){
        return cy.get(':nth-child(6) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn > :nth-child(2)')
    }

}
export const archiveOrganizationPage= new ArchiveOrganizationPage()