import React, {Component} from 'react';

class AddComment extends Component {
  state = {
    username: "",
    text: ""
  };

  handleUsernameChange = ev => {
    this.setState({
      username: ev.target.value
    });
    if (this.state.username.length < 5 || this.state.username.length > 15) {
      ev.target.style.background = "#ffc6b0"
    } else {
      ev.target.style.background = "#fff"
    }
  };

  handleTextChange = ev => {
    this.setState({
      text: ev.target.value
    });
    if (this.state.text.length < 20 || this.state.text.length > 50) {
      ev.target.style.background = "#ffc6b0"
    } else {
      ev.target.style.background = "#fff"
    }
  };

  render() {
    return (
      <div>
        <h3>Add new comment:</h3>
        User:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          style={{marginBottom: ".5rem", marginLeft: ".5rem"}}
        /><br/>
        Text:
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
          style={{marginLeft: ".6rem"}}
        />
      </div>
    );
  }
}

export default AddComment;