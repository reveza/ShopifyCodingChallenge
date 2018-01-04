import React, {Component} from 'react'
import './index.css';

import Header from './Header';

class App extends Component {
  render() {
    return(
      <div className="App p-3">
      <div className="row">
        <div className="col-md-2 col-xs-0">
        </div>
        <div className="col-md-8 col-xs-12">
          <Header />
          </div>
        <div className="col-md-2 col-xs-0">
        </div>
        </div>
        <a rel="stylesheet" type="text/css" href="" className="link text-center">Unsubscribe</a>
      </div>
    );
  }
}

export default App;
