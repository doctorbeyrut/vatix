import { Page, Locator, expect } from '@playwright/test';

export class FormSubmissionPage {

readonly page: Page
readonly date: Locator
readonly pickDate: Locator
readonly okButton: Locator
readonly location: Locator
readonly type: Locator
readonly description: Locator
readonly nameOfPersonInvolved: Locator
readonly personCategory: Locator
readonly submit: Locator
readonly successMessage: Locator

constructor ( page: Page ) {
    this.page = page
    this.date = page.getByTestId('InsertInvitationIcon');
    this.pickDate = page.getByRole('gridcell', { name: '5', exact: true });
    this.okButton = page.getByRole('button', { name: 'OK' })
    this.location = page.getByTestId('Location').getByLabel('toggle dropdown');
    this.type = page.getByTestId('Type').getByLabel('toggle dropdown');
    this.description = page.getByPlaceholder('Description');
    this.nameOfPersonInvolved = page.getByPlaceholder('Name of person involved');
    this.personCategory = page.getByTestId('Person category').getByLabel('toggle dropdown');
    this.submit = page.getByText('Submit');
    this.successMessage = page.getByRole('heading', { name: 'Incident reported' });
}

async openSubmissionForm() {
    console.log('Opening submission form');
    await this.page.goto('https://workspace.stage.vatix.com/publicSubmission/731ff348-c742-4f5a-8fee-58013ccaecfe/');
    await expect(this.page).toHaveTitle('Vatix Workspace');
}

async selectCurrentDate() {
    console.log('Selecting current date')
    await this.date.click();
    await this.pickDate.click();
    await this.okButton.click();
}

async selectLocation(location: string) {
    const pickLocation = this.page.getByRole('option', { name: location });
    console.log(`selecting ${location}`);
    await this.location.click();
    await pickLocation.click();
}

async selectType(type: string) {
    const pickType = this.page.getByRole('option', { name: type });
    console.log(`selecting ${type}`);
    await this.type.click();
    await pickType.click();
}

async fillDescription() {
    console.log('Writing description')
    await this.description.fill('A very detailed description of the incident.')
}

async writeNameOfPersonInvolved(name: string) {
    console.log('Writing name of involved person')
    await this.nameOfPersonInvolved.fill(name);
}

async choosePersonCategory(category:string) {
    const pickCategory = this.page.getByRole('option', { name: category })
    await this.personCategory.click();
    await pickCategory.click();
}

async submitForm() {
    await this.submit.click();
    console.log('Submitting form');
}

}