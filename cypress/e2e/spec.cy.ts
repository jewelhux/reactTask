/// <reference types="cypress" />
// @ts-check
// cypress/support/e2e.j

import '@cypress/code-coverage/support';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
  });
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
