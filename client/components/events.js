import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import { fetchActivities } from '../store'

export class Events extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const activities = this.props.activities
        return (
            <Item.Group>
               {
                   activities && activities.map((activity) => {
                       return (
                    <Item key={activity.id}>
                    <Item.Content >
                    <Item.Header as='a'>{activity.name}</Item.Header>
                    <Item.Meta>{activity.description}</Item.Meta>
                    <Item.Description>{activity.location}</Item.Description>
                    </Item.Content>
                    <Divider fitted />
              </Item>
                )
                })
               }
              </Item.Group>
        )
    }
}

const mapState = (state) => {
    return {
        activities: state.user.activities
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(Events)

export default Container
