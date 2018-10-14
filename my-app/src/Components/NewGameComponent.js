import React, { Component } from "react";
import ReactDOM from 'react-dom';

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {opp: '', bet: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({opp: event.target.value});
  }

  handleChange2(event) {
    this.setState({bet: event.target.value});
  }

  handleSubmit(event) {
    alert('Game created with ' + this.state.opp + ', ' + this.state.bet);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Room code:
          <input type="text" value={this.state.opp} onChange={this.handleChange1} />
        </label>
        <label>
          Bet amount:
          <input type="text" value={this.state.bet} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default NewGame;
