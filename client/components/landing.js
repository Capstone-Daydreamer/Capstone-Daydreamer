import React, { Component } from 'react'
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
    return (
      <div>
        {this.stuff}
        <div
          className = 'background-image'
          style={{ textAlign: 'center', minHeight: 550, minWidth: '100vw', padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='Daydreamer'
              inverted
              style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '-.5em', marginTop: '2em' }}
            />
            <Header
              as='h2'
              content='Let us plan your dream day for you!'
              inverted
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            />
            <Button size='huge'>
              Log In
                <Icon name='right arrow' />
            </Button>
            <Button size='huge'>
              Sign Up
                <Icon name='right arrow' />
            </Button>
          </Container>
          
        </div>

         <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
              <img src="./tourists.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Login</Button>
                <Button size='huge'>Sign-up</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    
      </div>
    )
  }
}

export default Landing
