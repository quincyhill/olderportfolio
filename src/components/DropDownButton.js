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
      return <DropDownContent content={this.props.content} />;
    }
  }

  render() {
    return (
      <div>
        <button
          className='drop-down-btn'
          onClick={() => {
            this.setState({ isClicked: !this.state.isClicked });
          }}
        >
          {this.props.name}
        </button>
        {this.displayFunction(this.state.isClicked)}
      </div>
    );
  }
}
