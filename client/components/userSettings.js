import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Form, Button } from 'semantic-ui-react'
import axios from 'axios'

export class UserSettings extends Component {
    constructor(props){
        super(props);
        this.state = {
           formError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault()
        console.log( this.props.user.id)
        if (evt.target.password.value === evt.target.confirmPassword.value){
          axios.put(`/api/users/${this.props.user.id}`, { password: evt.target.password.value})
        }  
    }

    render(){ 
        return (
            <Grid centered columns={1} padded>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>New Password</label>
                        <input name="password"type="password" placeholder='Password' />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input name="confirmPassword" type="password" placeholder='Confirm Password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Grid>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = null

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         handleSubmit(event, id) {
//             const thunk = adminUser(id, ownProps.history);
//             dispatch(thunk);
//         }
//     }
// }

const Container = connect(mapState, mapDispatchToProps)(UserSettings)

export default Container
