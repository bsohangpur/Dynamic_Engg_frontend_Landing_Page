import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isHome: !this.state.isHome })}>
          click me
        </button>
        {this.state.isHome ? <h1>hello</h1> : <h1>goodbye</h1>}
      </div>
    );
  }
}
