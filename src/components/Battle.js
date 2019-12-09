import React from "react";
import PropTypes from "prop-types";

function Instructions() {
  return <div>Instructions</div>;
}

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    );
  }
}
