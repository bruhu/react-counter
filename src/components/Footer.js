import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return <div>Last update: {this.props.date ? this.props.date.toString() : "No updates yet"}</div>;
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  };
};

export default connect(mapStateToProps)(Footer);
