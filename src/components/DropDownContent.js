import React, { Component } from "react";

export default class DropDownContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>My Data: {this.props.content}</p>
      </div>
    );
  }
}
