import React, { Component } from 'react';
import logo from './assets/logo3.png';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      organization: "",
      jobTitle: "",
      previousEvents: "",
      handleRadio: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <h1>Creative Industry Summit</h1>
          <h4>Please provide your details below:</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="double-input">
              <label>
                <p>
                  Organization/Company:
                </p>
                <input type="name" name="organization" onChange={this.handleChange} value={this.state.organization} />
              </label>
              <label>
                <p>
                  Job Title:
                </p>
                <input type="name" name="jobTitle" onChange={this.handleChange} value={this.state.jobTitle} />
              </label>
            </div>
            <div className="radio-form">
              <p>
                How did you hear about us?
              </p>
              <label>
                <input type="radio" name="handleRadio" onChange={this.handleChange} value="Social Media" />
                Social Media
            </label>
              <label>
                <input type="radio" name="handleRadio" onChange={this.handleChange} value="TV Ads" />
                TV Ads
            </label>
              <label>
                <input type="radio" name="handleRadio" onChange={this.handleChange} value="Newspaper Ads" />
                Newspaper Ads
            </label>
              <label>
                <input type="radio" name="handleRadio" onChange={this.handleChange} value="Media Coverage and News" />
                Media Coverage and News
            </label>
              <label>
                <input type="radio" name="handleRadio" onChange={this.handleChange} value="E-mail Shots and Newsletters" />
                E-mail Shots and Newsletters
            </label>
              <label>
                <input type="radio" name="handleRadio" onChange={this.handleChange} value="Recommendation from a friend / co-worker" />
                Recommendation from a friend / co-worker
            </label>
            </div>
            <label>
              <p>
                Did you attend any of Creative Industry Summit's previous events?
              </p>
              <textarea name="previousEvents" value={this.state.previousEvents} onChange={this.handleChange} />
            </label>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
