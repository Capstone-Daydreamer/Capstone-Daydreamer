import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Form, Button } from 'semantic-ui-react'

export class NewDay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const user = this.props.user
        return (
            <Form>
            <Grid centered columns={16} padded>
                <Grid.Row>
                    <Form.Field>
                        <label>Event Name</label>
                        <input placeholder='Enter Event Name' />
                    </Form.Field>
                </Grid.Row>

                <Grid.Row>
                    <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
              </Grid.Row>
              <Grid.Row>
                    <Button type='submit'>Submit</Button>
            </Grid.Row>
            </Grid>
              </Form>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(NewDay)

export default Container