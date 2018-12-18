import React, { propTypes, Component } from "react";
import Header from "./common/Header";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // children: propTypes.object.isRequired
};
export default App;
