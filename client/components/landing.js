import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
  Button,
  Container,
  Icon,
} from 'semantic-ui-react'
import ReactRotatingText from 'react-rotating-text';

import { connect } from 'react-redux'


/**
 * COMPONENT
 */

class Landing extends Component {

  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        <div
          className="background-image"
          style={{ textAlign: 'center', minHeight: 550, minWidth: '100vw', padding: '128px 16px' }}
          vertical
        >
          <h1 className="w3-margin w3-jumbo" style={{ color: '#F4F4F4' }}>Daydreamer</h1>
          <p className="w3-xlarge" style={{ color: '#F4F4F4' }}>Make Your Dream Day</p>
          <p className="w3-xlarge" style={{ color: '#F4F4F4' }}>More <ReactRotatingText items={['Awesome', 'Exciting', 'Fluid', 'Accessable', 'Varied', 'Entertaining']} pause={2000} emptyPause={100} /> </p>
          {
            !isLoggedIn &&
            <div>
              <a href="/login"><Button size="huge">
                Log In
                    <Icon name="right arrow" />
              </Button></a>
              <a href="/signup"><Button size="huge">
                Sign Up
                    <Icon name="right arrow" />
              </Button></a>
            </div>
          }
        </div>
        <Container>
          {this.stuff}

          <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
            <div className="w3-content">
              <div className="w3-third w3-center">
                <img src="/tourists.png" style={{ width: '80%', height: 'auto' }} />
              </div>

              <div className="w3-twothird">
                <h1>Who Are We?</h1>
                <h5 className="w3-padding-32">Daydreamer is your personal dynamic event scheduling assistant.</h5>

                <p className="w3-text-grey" style={{ marginBottom: '75px' }}>Using Daydreamer, you can efficiently plan and coordnate events between you and your friends. This is accomplished by cross referencing the schedules of everyone who authorizes with the app and recommending interesting happenings near you, personally tailored to what you like. This ensures that you and everyone invited will make the most of your day out!</p>
              </div>
            </div>

            <div className="w3-row-padding w3-center w3-margin-top">
              <div className="w3-third">
                <div className="w3-card w3-container" style={{ minHeight: '460px' }}>
                  <h3>Schedule</h3><br />
                  <i className="fa fa-calendar w3-margin-bottom w3-text-theme" style={{ fontSize: '120px' }} />
                  <p>Plan your events with others around everyones schedules in just a few clicks, that way no one gets left behind!</p>
                </div>
              </div>

              <div className="w3-third">
                <div className="w3-card w3-container" style={{ minHeight: '460px' }}>
                  <h3>Recommend</h3><br />
                  <i className="fa fa-exchange w3-margin-bottom w3-text-theme" style={{ fontSize: '120px' }} />
                  <p>Our advanced algorithems search events happening near you, that way you always know what to do on your night out!</p>
                </div>
              </div>

              <div className="w3-third">
                <div className="w3-card w3-container" style={{ minHeight: '460px' }}>
                  <h3>Discuss</h3><br />
                  <i className="fa fa-comments-o w3-margin-bottom w3-text-theme" style={{ fontSize: '120px' }} />
                  <p>Easily talk to your group members without having to leave the application, allowing for quick and easy coordination!</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
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

