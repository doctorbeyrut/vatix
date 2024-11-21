import { test, expect, type Page } from '@playwright/test';
import { FormSubmissionPage } from '../page/formSubmissionPage';


test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
  });

test.afterEach(async ({ page }) => {
console.log(`Finished ${test.info().title} with status ${test.info().status}`);

if (test.info().status !== test.info().expectedStatus)
    console.log(`Did not run as expected, ended at ${test.info().errors}`);
});

[
    {location: 'A2 Offices', type: 'Environmental Event' },
    {location: 'A2 Workshop', type: 'Environmental Event'},
    {location: 'A2 Yard', type: 'Environmental Event'},
    {location: 'B3 Offices', type: 'Environmental Event'},
    {location: 'B3 Workshop', type: 'Environmental Event'},
    {location: 'B3 Yard', type: 'Environmental Event'},
    {location: 'A2 Offices', type: 'Fatality' },
    {location: 'A2 Workshop', type: 'Fatality'},
    {location: 'A2 Yard', type: 'Fatality'},
    {location: 'B3 Offices', type: 'Fatality'},
    {location: 'B3 Workshop', type: 'Fatality'},
    {location: 'B3 Yard', type: 'Fatality'},
    {location: 'A2 Offices', type: 'Improvement' },
    {location: 'A2 Workshop', type: 'Improvement'},
    {location: 'A2 Yard', type: 'Improvement'},
    {location: 'B3 Offices', type: 'Improvement'},
    {location: 'B3 Workshop', type: 'Improvement'},
    {location: 'B3 Yard', type: 'Improvement'},
    {location: 'A2 Offices', type: 'LTI (Lost Time Injury)' },
    {location: 'A2 Workshop', type: 'LTI (Lost Time Injury)'},
    {location: 'A2 Yard', type: 'LTI (Lost Time Injury)'},
    {location: 'B3 Offices', type: 'LTI (Lost Time Injury)'},
    {location: 'B3 Workshop', type: 'LTI (Lost Time Injury)'},
    {location: 'B3 Yard', type: 'LTI (Lost Time Injury)'},
    {location: 'A2 Offices', type: 'Unsafe Action' },
    {location: 'A2 Workshop', type: 'Unsafe Action'},
    {location: 'A2 Yard', type: 'Unsafe Action'},
    {location: 'B3 Offices', type: 'Unsafe Action'},
    {location: 'B3 Workshop', type: 'Unsafe Action'},
    {location: 'B3 Yard', type: 'Unsafe Action'},
    {location: 'A2 Offices', type: 'Unsafe Condition' },
    {location: 'A2 Workshop', type: 'Unsafe Condition'},
    {location: 'A2 Yard', type: 'Unsafe Condition'},
    {location: 'B3 Offices', type: 'Unsafe Condition'},
    {location: 'B3 Workshop', type: 'Unsafe Condition'},
    {location: 'B3 Yard', type: 'Unsafe Condition'},    
].forEach(({ location, type }) => {
    test.describe(`Reporting incident using mandatory fields in ${location}`, () => {
        test(`Reporting incident in ${location} with type: ${type}`, async ({ page }) => {
            const form = new FormSubmissionPage(page);
            const successMessage = page.getByRole('heading', { name: 'Incident reported' });

            await form.openSubmissionForm();
            await form.selectCurrentDate();
            await form.selectLocation(location);
            await form.selectType(type);
            await form.fillDescription();
            await form.writeNameOfPersonInvolved('Jack Torrance');
            await form.choosePersonCategory('Contractor');
            await form.submitForm();
            expect(successMessage).toBeVisible;
            });
    });
});

test.describe(`Reporting incident using additional fields`, () => {

    test(`Reporting Near Miss`, async ({ page }) => {
        const form = new FormSubmissionPage(page);
        const successMessage = page.getByRole('heading', { name: 'Incident reported' });

        await form.openSubmissionForm();
        await form.selectCurrentDate();
        await form.selectLocation('A2 Yard');
        await form.selectType('Near Miss');
        await form.fillDescription();
        await form.writeNameOfPersonInvolved('Jack Torrance');
        await form.choosePersonCategory('Contractor');
        await form.selectCause('Obstruction');
        await form.submitForm();
        expect(successMessage).toBeVisible;
    });
    
});