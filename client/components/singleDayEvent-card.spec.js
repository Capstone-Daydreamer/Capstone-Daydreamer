// /* global describe beforeEach it */

// import { expect } from 'chai'
// import React from 'react'
// import enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import { SingleDayEventCard } from './singleDayEvent-card'

// const adapter = new Adapter()
// enzyme.configure({ adapter })

// describe('SingleDayEventCard', () => {
//   let eventCard
//   let yelprec = {
//     id: 1,
//     name: 'Great Restaurant',
//     rating: '4 stars',
//     location: {
//       address1: '800 W. Rand Rd.',
//       city: 'Chicago',
//       state: 'IL'
//     },
//     price: '$$'
//   }

//   beforeEach(() => {
//     eventCard = shallow(<SingleDayEventCard yelprec={yelprec} />)
//   })

//   it('renders the email in an h3', () => {
//     expect(eventCard.find('Item.Header').text()).to.be.equal('Great Restaurant')
//   })
// })
