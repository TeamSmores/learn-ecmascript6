import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import ES5Editor from './ES5Editor';

const App = () => (
  <div id="App">
    <Header />
    <ES5Editor />
    <Footer />
  </div>
);

render(<App />, document.getElementById('main-container'));
