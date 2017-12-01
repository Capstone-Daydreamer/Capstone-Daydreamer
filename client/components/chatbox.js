import React from 'react'
import { connect } from 'react-redux'
import { fetchDay, fetchGroupInt } from '../store'
import * as firebase from 'firebase';

/**
 * COMPONENT
 */
export class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    this.loadMessages();
  }

  loadMessages = () => {
    const rootRef = firebase.database().ref().child('messages');
    const groupMessageRef = rootRef.child(1);
    groupMessageRef.limitToLast(6).on('child_added', data => {
      let val = data.val();
      this.setState({
        messages: [...this.state.messages, val]
      })
    });
    groupMessageRef.limitToLast(6).on('child_changed', data => {
      let val = data.val();
      this.setState = {
        messages: [ ...this.state.messages, { key: data.key, name: val.name, text: val.text}]
      }
    });
  }

  messageSubmit = event => {
    event.preventDefault();
    const { user  } = this.props;
    const rootRef = firebase.database().ref().child('messages');
    const groupMessageRef = rootRef.child(1);

    if (event.target.message.value) {
      groupMessageRef.push({
        name: user.name,
        text: event.target.message.value,
      })
      event.target.message.value = ''
    }
  }

  render() {
    let keyInt = 0;
    return (
      <div id="messages-card-container" >
        {/* Messages container */}
          <div className="mdl-color-text--grey-600">
            <div id="messages">
              <span id="message-filler" />
              {this.state.messages.map(message => {
                return (
                  <div className="message-container" key={keyInt++}>
                  <div className="spacing">
                    <div className="pic" />
                  </div>
                  <p className="message">{message.text}</p>
                  <h1 className="name">{message.name}</h1>
                  </div>
                )
              })}
            </div>
            <form id="message-form" action="#" onSubmit={this.messageSubmit}>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="message" />
                <label className="mdl-textfield__label" htmlFor="message">Message...</label>
              </div>
              <button id="submit" type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                Send
          </button>
            </form>
            <form id="image-form" action="#">
              <input id="mediaCapture" type="file" accept="image/*,capture=camera" />
              <button id="submitImage" title="Add an image" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white">
                <i className="material-icons">image</i>
              </button>
            </form>
          </div>

      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    group: state.groups[0]
  }
}

const mapDispatch = dispatch => {
  return {
    loadDay(id) {
      dispatch(fetchDay(id))
      dispatch(fetchGroupInt(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Chat)
