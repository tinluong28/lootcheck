import React, { Component } from "react";
import { connect } from "react-redux";

class Wallet extends Component {
  render() {
    return (
      <div>
        <h3>Wallet balance: {this.props.balance}</h3>
      </div>
    );
  }
}

export default connect(
  state => {
    balance: state;
  },
  null
)(Wallet);
