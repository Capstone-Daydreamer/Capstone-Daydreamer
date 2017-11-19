import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Form, Button } from 'semantic-ui-react'
import { addDay } from '../store'

export class NewDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const user = this.props.user
        const categories = this.props.categories
        const groups = this.props.user.groups
        const value = this.state.value
        return (
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
                <Form.Group inline>
                    <label>Groups</label>
                    {
                      groups !== undefined && groups.map((group) => {
                        return <Form.Radio 
                                name="group" 
                                key={group.id} 
                                label={group.name} 
                                value={group.id} 
                                checked={value === group.id} 
                                onChange={this.handleChange} />
                      })
                    }
                </Form.Group>
                </Grid.Row>
                <Grid.Row>
                    <Form.Field>
                        <label>Description</label>
                        <input 
                            name="description" 
                            placeholder='Description' />
                    </Form.Field>
              </Grid.Row>
              <Grid.Row>
                    <Form.Field>
                        <label>Date</label>
                        <input 
                            name="date" 
                            placeholder='Date' />
                    </Form.Field>
              </Grid.Row>
              <Grid.Row>
                    <Button 
                        type='submit'>Submit</Button>
            </Grid.Row>
            </Grid>
              </Form>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        categories: state.categories
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(event, id) {
            event.preventDefault()
            dispatch(addDay(id, event.target.name.value, '2017-12-05', event.target.group.value));
        }
    }
}

const Container = connect(mapState, mapDispatch)(NewDay)

export default Container
