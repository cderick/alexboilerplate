import React from 'react'
import renderer from 'react-test-renderer'
import Component404 from './Component404'
import { MockedProvider } from '@apollo/react-testing'


describe('Test on <Component404 /> container', () => {
  test('should render with no props', () => {
    const componentNoprops = renderer.create(
      <MockedProvider mocks={[]}>
        <Component404 />
      </MockedProvider>,
    )
    const treeNoprops = componentNoprops.toJSON()
    expect(treeNoprops).toMatchSnapshot()
  })
})

