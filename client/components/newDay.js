import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Form, Button, Checkbox, Segment, Header } from 'semantic-ui-react'
import { addDay, fetchAvailability, fetchCategories } from '../store'
import { withRouter } from 'react-router-dom'

export class NewDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.props.getCats()
    }

    handleChange = (e, { value }) => {
        let temp = this.state.value
        if (this.state.value.indexOf(value) === -1) {
            temp.push(value)
        } else {
            let index = temp.indexOf(value)
            temp.splice(index, 1)
        }
        this.setState({ value: temp })
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
                <Form onSubmit={(evt) => this.props.handleSubmit(evt, user.id, value)}>
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
                                <label>Event City and State</label>
                                <input
                                    name="location"
                                    placeholder='Chicago, IL' />
                            </Form.Field>
                        </Grid.Row>
                        <Grid.Row>
                            <Form.Group inline>
                                {
                                    categories !== undefined && categories.map((category) => {
                                        return <Form.Checkbox name="category" key={category.id} label={category.name} value={category.name} checked={value.indexOf(category.name) !== -1} onChange={this.handleChange} />
                                    })
                                }
                            </Form.Group>
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
            dispatch(addDay(event.target, groupId, value));
        },
        getCats(){
            dispatch(fetchCategories())
        }
    }
}

const Container = withRouter(connect(mapState, mapDispatch)(NewDay))

export default Container
