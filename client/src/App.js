import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {server: null };
  }

  async componentDidMount() {
    const result = await fetch("/api/hello");
    const data = await result.json();
    this.setState({ server: data.result });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to gremUIlle</h1>
        </header>
        <p className="App-intro">
          {this.state.server || "..." }
        </p>
      </div>
    );
  }
}

export default App;
