import React, { Component } from 'react';

class Title extends Component {
  constructor () {
    super();
    this.state = {
      title: 'Wonng'
    };
  }

  render () {
    return (
      <h1> Hello, {this.state.title} </h1>
    );
  }
}

export default Title;
