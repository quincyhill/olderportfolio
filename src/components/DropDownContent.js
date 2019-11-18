import React, { Component } from "react";
import "./DropDownContent.css";

export default class DropDownContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
