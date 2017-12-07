import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Footer } from './footer'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Footer', () => {
  let footer

  beforeEach(() => {
    footer = shallow(<Footer />)
  })

  it('renders created by in b tag', () => {
    expect(footer.find('b').text()).to.be.equal('Created By')
  })
})