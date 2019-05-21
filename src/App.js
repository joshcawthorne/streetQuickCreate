import React from "react";
import QuickCreate from "./components/quickCreate/QuickCreateButton";

import viewing from "./img/viewing.png";
import applicant from "./img/applicant.png";
import valuation from "./img/valuation.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFAB = this.toggleFAB.bind(this);
    this.state = {
      active: false
    };
  }

  //Function to toggle floating action button
  toggleFAB() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Street Component</h1>
          <div className="quickCreateToolbarContainer">
            <div
              className={
                this.state.active ? "quickCreateToolbarInner" : "inactive"
              }
            >
              <QuickCreate text={"New Valuation"} icon={valuation} link={"#"} />
              <QuickCreate text={"New Applicant"} icon={applicant} link={"#"} />
              <QuickCreate text={"New Viewing"} icon={viewing} link={"#"} />
            </div>
            <div
              className={
                this.state.active
                  ? "quickCreateActionTextContainerActive"
                  : "quickCreateActionTextContainer"
              }
              onClick={this.toggleFAB}
            >
              <div className="quickCreateActionButton" />
              <div className="quickCreateActionText">
                <h1>Quick Create</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
