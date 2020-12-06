import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Radio from './src/radio';

ReactDOM.render(
  <Router>
    <Route exact patch="/radio">
      <Radio/>
    </Route>
  </Router>,
  document.getElementById('root')
)
