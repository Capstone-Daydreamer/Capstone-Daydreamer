/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SingleDayPast } from './singleDayPast'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('SingleDayPast', () => {
  const days = {
    name: 'Cool Day'
  }
  let singleDayPast

  beforeEach(() => {
    singleDayPast = shallow(<SingleDayPast days={days} />)
  })


  it('renders the title of this page', () => {
    expect(singleDayPast.find('p').text()).to.be.equal('Here\'s what you did for Cool Day')
  })
})
