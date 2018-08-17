'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

const noop = () => null

it('should button default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop}>
      Click me default
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} kind='success'>
      Click me success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should button danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} kind='danger'>
      Click me danger
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Button with prop kind="success" should has class"-success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='success'>
      Button success
    </Button>
  )
  expect(wrapper.hasClass('-success')).toBe(true)
})

it('Button with prop kind="danger" should has class"-danger"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='danger'>
      Button danger
    </Button>
  )
  expect(wrapper.hasClass('-danger')).toBe(true)
})
