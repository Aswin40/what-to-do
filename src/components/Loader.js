import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="BallTriangle"
        color="grey"
        height={100}
        width={100}
        visible={this.props.visible}
      />
    );
  }
}
