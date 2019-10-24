import React, { Component } from "react";
import "./DropDownButton.css";
import DropDownContent from "../components/DropDownContent";

export default class DropDownButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, CONTENT: "This is some content" };
  }

  displayFunction(isClicked) {
    if (isClicked) {
      return <DropDownContent content={this.state.CONTENT} />;
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ isClicked: !this.state.isClicked });
          }}
        >
          Click:{this.props.name} also my state is:{" "}
          {String(this.state.isClicked)}
        </button>
        {this.displayFunction(this.state.isClicked)}
      </div>
    );
  }
}
