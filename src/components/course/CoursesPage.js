import React, { propTypes, Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseAction";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  /**  Container Component Piece 1 constructor */
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {
        title: ""
      }
    };

    //bind this
    this.onTittleChange = this.onTittleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  /**  Container Component Piece 2 Child Functions */
  onTittleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    // alert(`saving ${this.state.course.title}`);
    // this.props.dispatch(courseActions.createCourse(this.state.course)); // one method to distpatch action on click
    // this.props.createCourse(this.state.course); // second method to dispatch action on click.
    this.props.actions.createCourse(this.state.course); // Third method to dispatch actions using bind on click.
  }
  courseRow(course, index) {
    return <div key={index}> {course.title}</div>;
  }

  /**  Container Component Piece 3 render Function */

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTittleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}

/**  Container Component Piece 4 render Function */
CoursesPage.propTypes = {
  dispatch: propTypes.func.isRequired,
  courses: propTypes.array.isRequired
};

// const connectedStateAndProps = onnect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

/**  Container Component Piece 5 Redux Function */

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // this should according to mention in rootreducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))  // one method to dispatch actions
    actions: bindActionCreators(courseActions, dispatch) // second method using bind to dispatch actions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
