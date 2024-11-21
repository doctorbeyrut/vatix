
Title: First Aid Injury cannot be submitted

Severity: Critical
Priority: High

Description: Incident report cannot be submitted when First Aid injury type is selected even when all mandatory fields are filled correctly.

Steps to reproduce:
1. Open incident form submission.
2. Select date and location.
3. Select First Aid Injury from "Type" dropdown menu.
4. Write description in the "Description" field.
5. Fill "Name of person involved" field.
5. Select Person Category.
6. Select at least one Injury Type and make sure to select "Other".
7. Write description for injury Type.
8. Select Severity.
9. Select Injury details making sure that "Other" is selected.
10. Write the description for Injury.
11. Select injured body parts.
12. Select cause of injury making sure that "Other" is selected.
13. Write the description for the cause of injury.
14. Click the submit button.

Expected results: Incident form is submitted when all mandatory fields are selected/filled and success message is displayed.

Actual results: Incident form is not submitted and error message is displayed that not all fields were selected. Submit button is grayed out and does not change even after changing fields/desriptions.