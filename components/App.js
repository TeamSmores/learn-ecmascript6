import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import ES5Editor from './ES5Editor';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        <Header />
        <Footer />
        <ES5Editor />
      </div>
    )
  }
}
//Equivalent from tic-tac-toe:
// var App = React.createClass({
//   render: function() {
    
//     return (
//       <div className="container">
//         <h1>Tic Tac Toe</h1>
//         <Board />
     
//       </div>
//     );
//   }
// });


render(<App />, document.getElementById('main-container'));
// Equivalent from tic-tac-toe:
// ReactDOM.render(<App />, document.getElementById('content'));

