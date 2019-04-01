import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  constructor() {
    super();
    this.state = { balance: undefined };
  }
  updateBalance = e => this.setState({ balance: parseInt(e.target.value, 0) });
  render() {
    return (
      <div>
        <h3 className="balance">
          Wallet current balance: {this.props.balance}
        </h3>
        <br />
        <input
          type="text"
          className="input-balance"
          onChange={this.updateBalance}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state };
  },
  null
)(Wallet);
