import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import { removeInterest, addInterest, destroyInterest, yelpSearch, eventfulPost } from '../store'
import SingleDayPick from './singleDayPick'
import SingleDayPast from './singleDayPast'
import SingleDayConfirmed from './singleDayConfirmed'
import RecommendedEvents from './recommendedEvents'

export class SingleDayEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // componentDidMount() {
    //     const { recommendations } = this.props
    //     const location = 'Chicago, IL'
    //     const keys = Object.keys(recommendations)
    //     keys.forEach(key => {
    //         if (key === 'bars' || key === 'restaurants') {
    //             this.props.loadYelp(key, location, recommendations[key])
    //         } else {
    //             this.props.loadEventful(key, location, recommendations[key])
    //         }
    //     })
    // }
    render() {
        const { days } = this.props
        const event = new Date(days.date)
        const stateOfDay = () => {
            const sec = days.createdAt && event.getTime() - Date.now()

            if (sec < 0) {
                return true
            } else {
                return false
            }
        }

        const renderDayState = () => {
            if (days.date === null){
                return <SingleDayPick />
            } else if (stateOfDay()){
               return <SingleDayPast days={days} />
            } else if ( !stateOfDay() && days.activities.length > 0){
                return <SingleDayConfirmed days={days} />
            } else {
                return <RecommendedEvents />
            }
        }

        return (

                renderDayState()
 
        )
    }
}

const mapState = (state) => {
    return {
        days: state.days,
    }
}

const mapDispatch = dispatch => {
    return {
        loadYelp(term, location, categories) {
            dispatch(yelpSearch(term, location, categories))
        },
        loadEventful(category, location, keywords) {
            dispatch(eventfulPost(category, location, keywords))
        }
    }
}

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container
