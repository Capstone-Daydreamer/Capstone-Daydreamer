import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import { removeInterest, addInterest, destroyInterest, yelpSearch } from '../store'
import SingleDayEventCard from './singleDayEvent-card'

export class SingleDayEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.loadGroup(id)
      }
    render() {
        const {days, yelprecommend} = this.props
        const event = new Date(days.date)
        const stateOfDay = () => {
            const sec = days.createdAt && event.getTime() - Date.now()

            if (sec < 0) {
                return true
            } else {
                return false
            }
        }
        return (
            stateOfDay() ?
                <Grid columns={8} padded>
                    <Item.Group>
                        <Item>
                            {
                                days.activities && days.activities.map((activity) => {
                                    return (
                                        <div key={activity.id}>
                                            <Item.Content >
                                                <Item.Header as='a'>{activity.name}</Item.Header>
                                                <Item.Meta>{activity.description}</Item.Meta>
                                                <Item.Description>{activity.location}</Item.Description>
                                            </Item.Content>
                                            <Divider fitted />
                                        </div>
                                    )
                                })
                            }
                        </Item>
                    </Item.Group>
                </Grid > :
                <SingleDayEventCard yelprec={yelprecommend} />

        )
    }
}

const mapState = (state) => {
    return {
        days: state.days,
        yelprecommend: state.yelprecommend
    }
}

const mapDispatch = dispatch => {
    return {
        loadGroup(term, location, categories){
            dispatch(yelpSearch(term, location, categories))
        }
    }
}

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container