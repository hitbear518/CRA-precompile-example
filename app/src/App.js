import React, { Component } from 'react';
import { t, jt } from 'ttag.macro';
import logo from './logo.svg';
import './App.css';

const LangSwitcher = () => (
  <div className="Lang-switch">
    <h2>{ t`Switch lang`}</h2>
    <a href={`/CRA-precompile-example/uk`}>uk</a>
    <a href={`/CRA-precompile-example/`}>en</a>
  </div>
)

class App extends Component {
  render() {
    const appLink = <code>src/App.js</code>;
    return (
      <div className="App">
        <header className="App-header">
          <LangSwitcher/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { jt`Edit ${ appLink } and save to reload.` }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { t`Learn React` }
          </a>
        </header>
      </div>
    );
  }
}

export default App;
