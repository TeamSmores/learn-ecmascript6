import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import ES5Editor from './ES5Editor';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        App
        <Header />
        <Footer />
        <ES5Editor />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
