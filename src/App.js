import React, { Component } from 'react';
import './App.css';
import { Service } from './Service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { results: undefined };
  }

  handleOnChange = evt => {
    evt.preventDefault();
    const text = evt.target.value;
    Service(text).then(results => {
      this.setState({ results: results });
    });
  };

  render() {
    const renderedResults = this.renderedResults();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Auto complete input backed by an endpoint using Lucene
          </h1>
        </header>
        <p className="App-intro">Type any book you want.</p>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" onChange={this.handleOnChange} />
        </form>
        <div className="results">{renderedResults}</div>
      </div>
    );
  }

  renderedResults() {
    const results = this.state.results;
    return (
      results &&
      results.map(book => {
        return (
          <div className="book-result">
            <span className="book-title">{book.title}</span> by{' '}
            <span className="author-name">{book.author}</span>
          </div>
        );
      })
    );
  }
}

export default App;
