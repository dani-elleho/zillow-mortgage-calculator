# zillow-mortgage-calculator
This repository contains Cypress tests for the Zillow Mortgage Calculator. The tests validate the functionalities of the interest rate input field.

## Installation
To install, clone the repository and ensure all dependencies are installed

``git clone https://github.com/dani-elleho/zillow-mortgage-calculator.git``

``cd zillow-mortgage-calculator``

## Running tests
To run this test, use command `npm run cypress:run` or `npx cypress run --spec "cypress/e2e/interestRate.spec.js"`

## Additional Notes
In terms of expanding this code, the following could be considered:
- Creating more reusable functions similar to the generateRandomInterestRate function to clean up any redundancies
- Be more data-driven rather than randomly generating values. While this is good for spot checking the field's functionality, having set interest rate values may be more beneficial to ensure the functionality of the calculator as a whole and ensures more accurate validation, avoiding any extreme edge cases that are less likely to occur on a regular basis.
- Add cross-functional browser testing

For future considerations, I would suggest:
- adding visual regression testing such as screenshots on failure to help with debugging
- if the test suite becomes too large, separate into individual tests and configure Cypress to run the tests in parallel to reduce test execution time

Potential Issues:
- If any of the error messages change, the assertions will begin to fail since they are hardcoded. To resolve this, I would maybe suggest adding identifiers to the elements themselves. This will allow the code to be more dynamic and fail less if UI changes such as text changes occur.
