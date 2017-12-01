import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { connect } from 'react-redux'


/**
 * COMPONENT
 */

class Landing extends Component {
  state = {}
  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        {this.stuff}
        <div
          className='background-image'
          style={{ textAlign: 'center', minHeight: 550, minWidth: '100vw', padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='Daydreamer'
              inverted
              className="landing-h1"
              style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '-.5em', marginTop: '2em' }}
            />
            <Header
              as='h2'
              content='Let us plan your dream day for you!'
              inverted
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            />
            {
              !isLoggedIn && 
              <div>
                <a href="/login"><Button size='huge'>
                  Log In
                    <Icon name='right arrow' />
                </Button></a>
                <a href="/signup"><Button size='huge'>
                  Sign Up
                    <Icon name='right arrow' />
                </Button></a>
              </div>
            }
          </Container>

        </div>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Plan your perfect day</Header>
                <p style={{ fontSize: '1.33em' }}>
                  With our application, you can find open times in the schedules of you and your friends to find the perfect time to see each other.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Chat with your group in real time</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Chat with your group in real time to optimize organization
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/tourists.png'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </div>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default withRouter(connect(mapState)(Landing))

