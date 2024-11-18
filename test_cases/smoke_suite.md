Manual testing plan

Form submission - positive path scenarios

1. Reporting incident using mandatory fields

    a. Reporting Environmental Event
    b. Reporting Fatality
    c. Reporting Improvement
    d. Reporting LTI (Lost Time Injury)
    e. Reporting Unsafe Action
    f. Reporting Unsafe Condition

2. Reporting incident with additional fields

    a. Reporting First Aid Injury
    b. Reporting Near Miss
    c. Reporting incident and adding a note
    d. Reporting incident and adding a picture
    e. Reporting incident and adding a file using file selector
    f. Reporting incident and adding a file using drag and drop 

Form submission - negative path scenarios

1. Reporting incident omitting mandatory fields

    a. Reporting incident without providing date and time
    b. Reporting incident without providing location
    c. Reporting incident without providing type
    d. Reporting incident without providing description
    e. Reporting incident without providing description while additional fields are visible

2. Reporting incident using incorrect test data

    a. Reporting incident with a date far in the future or past
    b. Reporting incident inputing random characters in the "type" field
    c. Reporting incident inputing random characters in additional fields when First Aid Injury or Near miss is selected

Basic test case - positive path:

Reporting incident

User is able to submit incident report after filling out mandatory fields

Steps:
1. Open "New submission" page
2. Fill out date and time field using keyboard/date selector
3. Choose location
4. Choose type
5. Provide description
6. Click "Submit"
7. Check if there is a success message on the screen

Expected result: Incident report is submitted when all mandatory fields are filled correctly

Basic test case - negative path:

Reporting incident

User is not able to submit incident report without filling out mandatory fields correctly

Steps:
1. Open "New submission" page
2. Click "Submit" button
3. Check if the mandatory fields are highlighted with appropriate message

Expected result: Incident report is not submitted when not all mandatory fields are filled correctly and appropriate message is displayed instructing the user