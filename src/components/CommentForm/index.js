import React, {Component} from 'react';
import './style.css';

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};

class CommentForm extends Component {
  state = {
    user: "",
    text: ""
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      user: "",
      text: ""
    })
  };

  getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? "form-input__error" : "";

  handleChange = type => ev => {
    const {value} = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        User: <input value={this.state.user}
                     onChange={this.handleChange("user")}
                     className={this.getClassName("user")}/>
        Text: <input value={this.state.text}
                     onChange={this.handleChange("text")}
                     className={this.getClassName("text")}/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

export default CommentForm;