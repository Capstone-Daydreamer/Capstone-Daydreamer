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
          <h1 className="w3-margin w3-jumbo">Daydreamer</h1>
          <p className="w3-xlarge">Make Your Dream Day</p>
          <p className="w3-xlarge">More <ReactRotatingText items={['Awesome', 'Exciting', 'Fluid', 'Accessable', 'Varied', 'Entertaining']} pause={2000} emptyPause={100} /> </p>
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
            <div className="w3-third w3-center" />
            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

              <p className="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div className="w3-row-padding w3-center w3-margin-top">
            <div className="w3-third">
              <div className="w3-card w3-container" style={{ minHeight: '460px' }}>
                <h3>Responsive</h3><br />
                <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{ fontSize: "120px" }} />
                <p>Built-in responsiveness</p>
                <p>Mobile first fluid grid</p>
                <p>Fits any screen sizes</p>
                <p>PC Tablet and Mobile</p>
              </div>
            </div>

            <div className="w3-third">
              <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
                <h3>Standard CSS</h3><br />
                <i className="fa fa-css3 w3-margin-bottom w3-text-theme" style={{ fontSize: "120px" }}></i>
                <p>Standard CSS only</p>
                <p>Easy to learn</p>
                <p>No need for jQuery</p>
                <p>No JavaScript library</p>
              </div>
            </div>

            <div className="w3-third">
              <div className="w3-card w3-container" style={{ minHeight: '460px' }}>
                <h3>Design</h3><br />
                <i className="fa fa-diamond w3-margin-bottom w3-text-theme" style={{ fontSize: "120px" }} />
                <p>Paper like design</p>
                <p>Bold colors and shadows</p>
                <p>Equal across platforms</p>
                <p>Equal across devices</p>
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

