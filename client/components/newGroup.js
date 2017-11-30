import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Divider, Grid, 
        Form, Button, Checkbox, 
        Segment, Header, Card, } from 'semantic-ui-react'
import { fetchUsers, postNewGroup } from '../store'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

export class NewGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.loadInitialData()
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
        const users = this.props.users !== undefined && this.props.users.filter(userList =>
            userList.id !== user.id
        )
        const value = this.state.value
        return (
            <Segment>
                <div id="groups-header"><h1>New Group</h1>
                <p>Feeling like getting a new group together?</p>
                </div>
            <Form onSubmit={(evt) => this.props.handleSubmit(evt, user, this.state.value)}>
            <Grid centered columns={16} padded>
                <Grid.Row>
                    <Form.Field>
                        <label>Group Name</label>
                        <input 
                            name="name" 
                            placeholder='Enter New Group Name' />
                    </Form.Field>
                </Grid.Row>
                <Grid.Row>
                <Form.Field>
                    <label>Add a short group description!</label>
                    <input 
                        name="description" 
                        placeholder='Group description' />
                </Form.Field>
            </Grid.Row>
                <Grid.Row>
                <Header as='h3' textAlign='center'>Select some cool group members and click <Button 
                        type='submit' color='teal'>Submit!</Button></Header>
                </Grid.Row>
                <Grid.Row>
                {/* <Form.Group inline>
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
                </Form.Group> */}
                <Form.Group>
                <Item.Group divided>
                    <label>Users</label>
                    {
                        users !== undefined && users.map((user) => {
                            return (
                                <div id="user-group-card" key={user.id}>
                                <img id="user-group-img" src="./edit4.jpg" />
                                <div id="user-group-content">
                                <span><Checkbox
                                    name="user" 
                                    value={user.id} 
                                    checked={value.indexOf(user.id) !== -1} 
                                    onChange={this.handleChange} /></span>
                                  <div><p><b>{user.name}</b></p></div>
                                  <Divider />
                                  <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p></div> 
                                </div>
                              </div>
                        )
                    })
                }
                </Item.Group>
                </Form.Group>
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
        groups: state.groups,
        users: state.users
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(event, user, value) {
            event.preventDefault()
            dispatch(postNewGroup(event.target.name.value, user, value, event.target.description.value));
            //must dispatch to cronofy
            const email = user.email
            emailjs.send('gmail', 'new_group_confirmation', {
                email: email,
                to_name: user.name,
                from_name: 'Daydreamer',
                message_html: 'You have been added to a new group'
            })
        },
        loadInitialData() {
            dispatch(fetchUsers())
        }
    }
}

const Container = withRouter(connect(mapState, mapDispatch)(NewGroup))

export default Container