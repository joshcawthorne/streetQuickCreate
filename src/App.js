import React from "react";
import QuickCreate from "./components/quickCreate/QuickCreateButton";

import viewing from "./img/viewing.png";
import applicant from "./img/applicant.png";
import valuation from "./img/valuation.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Street Component</h1>
          <div className="quickCreateToolbarContinaer">
            <div
              className={
                this.state.active ? "inactive" : "quickCreateToolbarInner"
              }
            >
              <QuickCreate text={"New Valuation"} icon={valuation} link={"#"} />
              <QuickCreate text={"New Applicant"} icon={applicant} link={"#"} />
              <QuickCreate text={"New Viewing"} icon={viewing} link={"#"} />
            </div>
            <div
              className="quickCreateActionButton"
              onClick={this.toggleClass}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
