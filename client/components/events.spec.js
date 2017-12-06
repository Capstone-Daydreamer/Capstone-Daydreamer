/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Events } from './events'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('Events', () => {
  const activities = [
    {
      id: 1,
      name: 'Cool event',
      description: 'A great event for great friends',
      location: 'Chicago, IL'
    },
    {
      id: 2,
      name: 'Amazing time',
      description: 'This will be the best event',
      location: 'New York, New York'
    }
  ]

  let events

  beforeEach(() => {
    events = shallow(<Events activities={activities} key={activities.id} />)
  })


  it('renders the events', () => {
    expect(events.find('p').first().text()).to.be.equal('Looking for where you\'ve been and what you\'ve done? Look no further.')
    expect(events.find('p').last().text()).to.be.equal('New York, New York')    
  })
})
