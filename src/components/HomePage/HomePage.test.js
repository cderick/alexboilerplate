import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from './HomePage'
import { MockedProvider } from '@apollo/react-testing'


describe('Test on <HomePage /> container', () => {
  test('should render with no props', () => {
    const componentNoprops = renderer.create(
      <MockedProvider mocks={[]}>
        <HomePage />
      </MockedProvider>,
    )
    const treeNoprops = componentNoprops.toJSON()
    expect(treeNoprops).toMatchSnapshot()
  })
})

