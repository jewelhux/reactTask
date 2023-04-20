/// <reference types="cypress" />
// @ts-check
// cypress/support/e2e.j

import '@cypress/code-coverage/support';

describe('template spec', () => {
  it('check all page', () => {
    cy.visit('/');
    cy.contains('Main page').click();
    cy.contains('About page').click();
    cy.contains('Form page').click();
  });

  it('open main page and modal window', () => {
    cy.visit('/');
    cy.contains('Project Iceman Website').click();
    cy.contains('Condition: new');
  });

  it('open main page and search', () => {
    cy.visit('/');
    cy.get('[class="search-bar-input"]').type('Pro{enter}');
    cy.contains('Project Iceman Website');
  });

  it('open main page and search not product', () => {
    cy.visit('/');
    cy.get('[class="search-bar-input"]').type('12345{enter}');
    cy.contains('Not found card ...');
  });

  it('open about page', () => {
    cy.visit('/about');
    cy.contains('Current page: AboutPage');
  });

  it('open 404  page', () => {
    cy.visit('/404');
    cy.contains('Current page: 404 page');
  });

  it('open form page', () => {
    cy.visit('/form');
    cy.contains('Current page: FormPage');
    cy.get('[class="form-element-title"]').type('IlyaDanilov');
    cy.contains('Submit').click();
    cy.contains('Error! It is necessary to adopt the rules!');
    cy.get('[class="form-element-image"]').selectFile('./src/assets/jik.jpg');
    cy.get('[class="form-element-date"]').type('2024-12-12');
    cy.get('[class="form-element-select"]').select('car');
    cy.get('[type="radio"]').last().check();
    cy.get('[class="form-element-checkbox"]').click();
    cy.contains('Submit').click();
    cy.get('[class="item-card"]').click();
  });

  it('End Test', () => {
    expect(true).to.equal(true);
  });
});
