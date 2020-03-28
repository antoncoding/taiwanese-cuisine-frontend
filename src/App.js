import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Compare from './Components/Compare'
import Ranking from './Components/Ranking'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {

  const key = process.env.REACT_APP_TEST_KEY
  console.log(`got env key ${key}`)

  return (
    <Router>
        <Switch>
          <Route path='/ranking/' children={<Ranking/>} />
          <Route path='/' children={<Compare/>} />
        </Switch>
    </Router>
  );
}

export default App;