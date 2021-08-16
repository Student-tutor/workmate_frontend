import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>form details</form>
      </div>
    );
  }
}
