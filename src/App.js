import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Compare from './Components/Compare'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/compare' children={<Compare/>} />
        </Switch>
    </Router>
  );
}

export default App;
