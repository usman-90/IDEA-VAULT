import React from 'react'
import CardComponent from './card'

describe('<CardComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardComponent />)
  })
})