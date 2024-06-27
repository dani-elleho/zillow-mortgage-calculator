import 'cypress-plugin-tab';

describe('Zillow Mortgage Calculator - Interest Rate Input Field', () => {
  beforeEach(() => {
    // Navigate to the Zillow Mortgage Calculator page before each test
    cy.visit('https://www.zillow.com/mortgage-calculator/');
  });

  // Utility function to generate a random interest rate between 0 and 99 with up to 0-4 decimal places
  function generateRandomInterestRate(isNegative = false) {
    const randomDecimalPlaces = Math.floor(Math.random() * 5); // Random number of decimal places (0 to 4)
    const randomInterestRate = (Math.random() * 99).toFixed(randomDecimalPlaces); // Random interest rate between 0 and 100
    return isNegative ? `-${randomInterestRate}` : randomInterestRate;
  }

  it('should allow a user to enter any valid interest rate', () => {
    // Generate a random valid interest rate
    const randomValidInterestRate = generateRandomInterestRate();

    // Locate the Interest Rate input field and enter the random valid interest rate
    cy.get('input[name="rate"]')
      .clear()
      .type(randomValidInterestRate)
      .tab(); // Tab out of the input field to trigger validation

      // Assert that the interest rate has been entered correctly
      cy.get('input[name="rate"]').should('have.value', randomValidInterestRate);
  });

  it('should display an error message when an interest rate value less than 0 is entered', () => {
    // Generate a random negative interest rate
    const negativeInterestRate = generateRandomInterestRate(true);

    // Locate the Interest Rate input field, clear it, and enter the negative interest rate
    cy.get('input[name="rate"]')
      .clear()
      .type(negativeInterestRate)
      .tab(); // Tab out of the input field to trigger validation

    // Assert that the error message is displayed
    cy.contains('Rate must be greater than or equal to 0')
      .should('be.visible');
  });

  it('should display an error message when an interest rate value greater than 100 is entered', () => {
    // Generate a random interest rate greater than 100
    const randomInterestRateAbove100 = (Math.random() * 100 + 100).toFixed(0); // Random interest rate between 100 and 200

    // Locate the Interest Rate input field, clear it, and enter the random interest rate above 100
    cy.get('input[name="rate"]')
      .clear()
      .type(randomInterestRateAbove100)
      .tab(); // Tab out of the input field to trigger validation

    // Assert that the error message is displayed
    cy.contains('Rate must be less than or equal to 100') // Change the text to match the actual error message on the site
      .should('be.visible');
  });
});
