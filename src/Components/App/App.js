import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { routes } from '../../routes'
import Navigation from '../Navigation'
import '../../reset.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div>
          <Switch>
            {
              routes.map((item, index) => (
                <Route key={index} path={item.path} exact= {item.exact}>
                  {item.component}
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
