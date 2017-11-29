import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Form, Button, Checkbox, Segment, Header } from 'semantic-ui-react'
import { addDay, fetchAvailability } from '../store'
import { withRouter } from 'react-router-dom'

export class NewDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
    }

    render() {
        const user = this.props.user
        const categories = this.props.categories
        const groups = this.props.groups
        const value = this.state.value
        return (
            <Segment>
                <Segment>
                <Header as='h3' textAlign='center'> Hi {groups.name}</Header>
                
                </Segment>
            <Form onSubmit={(evt) => this.props.handleSubmit(evt, user.id)}>
            <Grid centered columns={16} padded>
                <Grid.Row>
                    <Form.Field>
                        <label>Event Name</label>
                        <input 
                            name="name" 
                            placeholder='Enter Event Name' />
                    </Form.Field>
                </Grid.Row>
              <Grid.Row>
                    <Form.Field>
                        <label>Start Date</label>
                        <input 
                            type='datetime-local'
                            name="startDate" 
                            placeholder='Start Date Option 1' />
                    </Form.Field>
                    <Form.Field>
                        <label>End Date</label>
                        <input
                            type="datetime-local"
                            name="endDate" 
                            placeholder='End Date Option 1' />
                    </Form.Field>
                    <Form.Field>
                        <label>Duration</label>
                        <input 
                            type="number"
                            name="Duration" 
                            placeholder='Duration' />
                    </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <Button type="submit">Submit</Button>
                </Grid.Row>
            </Grid>
              </Form>
              </Segment>
        )
    }
}

const mapState = (state, ownProps) => {
    return {
        user: state.user,
        categories: state.categories,
        groups: state.groups
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(event, id, value) {
            event.preventDefault()
            const groupId = ownProps.match.params.groupId
            dispatch(addDay(event.target, groupId));
            // console.log('looking for group id', groupId)
            // dispatch(fetchAvailability(event.target, groupId))
        }
    }
}

const Container = withRouter(connect(mapState, mapDispatch)(NewDay))

export default Container
