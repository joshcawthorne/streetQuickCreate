import React from "react";

class quickCreateButton extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="quickCreateButtonContainer">
          <div className="quickCreateButton">
            <div className="quickCreateButtonText">{this.props.text}</div>
            <div className="quickCreateButtonIcon">
              <img
                src={this.props.icon}
                alt={this.props.text}
                className="quickCreateButtonIconImg"
              />
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default quickCreateButton;
