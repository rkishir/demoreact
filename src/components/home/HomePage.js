import React, { Component } from "react";
import { Link } from "react-router";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Admin side</h1>
        <p>React fundamentals </p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
