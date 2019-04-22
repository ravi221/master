import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Aux from './hoc/aux';
import './App.css';
import Header from './components/header/header';
import axios from './axios';
import Spinner from './components/ui/spinner/spinner';
import Program from './components/program/program';
import Strategy from './components/strategy/strategy';

import '@progress/kendo-theme-default/dist/all.css';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';

class App extends Component {
  render() {
    return (
      <Aux>
        <div className="App">
          {/*<Spinner />  */}
          <Header />
          <div style={{width: '100%'}}>
                    <div className="card" style={{width: '20%', float: 'left', margin: '10px'}}>
                            <div style={{margin: '5px'}}>
                                <p><NavLink to="/program">Program</NavLink></p>
                                <p><NavLink to="/strategy">Strategy</NavLink></p>
                            </div>
                    </div>
                    <div className="card" style={{width: '70%', float: 'right', margin: '10px'}}>
                      
                        <div style={{margin: '5px'}}>
                            <Route path="/" exact component={Program} />
                            <Route path="/program" component={Program} />
                            <Route path="/strategy" component={Strategy} />
                        </div>
                      
                    </div>
                </div>

        </div>
      </Aux>
    );
  }
}

export default withErrorHandler(App, axios);
