import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container, Segment, Grid, Image, Card, Button
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleGroup = () => {


  return (
    <Container>
      <h3>Group Name</h3>
      <p>Group Description</p>
      <Segment
        vertical
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Card.Group>
                  <Grid.Row>
                  
                  <Card>
                    <Card.Content>
                      <Image floated='right' size='mini' src='https://fillmurray.com/100/100' />
                      <Card.Header>
                        Steve Sanders
        </Card.Header>
                      <Card.Meta>
                        Friends of Elliot
        </Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button basic color='green'>Approve</Button>
                        <Button basic color='red'>Decline</Button>
                      </div>
                    </Card.Content>
                  </Card>

                  <Card>
                  <Card.Content>
                    <Image floated='right' size='mini' src='https://fillmurray.com/100/100' />
                    <Card.Header>
                      Steve Sanders
                </Card.Header>
                    <Card.Meta>
                      Friends of Elliot
                </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Approve</Button>
                      <Button basic color='red'>Decline</Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated='right' size='mini' src='https://fillmurray.com/100/100' />
                    <Card.Header>
                      Steve Sanders
      </Card.Header>
                    <Card.Meta>
                      Friends of Elliot
      </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Approve</Button>
                      <Button basic color='red'>Decline</Button>
                    </div>
                  </Card.Content>
                </Card>
                </Grid.Row>

                  <Card fluid color='yellow' header='event 1'>
                    <Grid>
                      <Grid.Column width={4}>
                        <Image src="https://fillmurray.com/200/200" />
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <Card.Header>Event Name</Card.Header>
                        <Card.Description>Event Description</Card.Description>
                      </Grid.Column>
                    </Grid>
                  </Card>

                  <Card fluid color='yellow' header='event 1'>
                    <Grid>
                      <Grid.Column width={4}>
                        <Image src="https://fillmurray.com/200/200" />
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <Card.Header>Event Name</Card.Header>
                        <Card.Description>Event Description</Card.Description>
                      </Grid.Column>
                    </Grid>
                  </Card>

                </Card.Group>
              </Grid.Column>
              <Grid.Column width={6}>
                <ul className="ui inverted link list">
                  <li><b>Created By</b></li>
                  <li>Ellen Ormerod</li>
                  <li>Jamie Slaughter</li>
                  <li>Benjamin Odisho</li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // email: state.user.email
  }
}

export default connect(mapState)(SingleGroup)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
