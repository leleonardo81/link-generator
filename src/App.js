import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import RedirectPage from './components/RedirectPage';

function App() {
  
  return (
    <Router>
      <Switch>  
        <Route path="/" key="main" exact component={MainPage} />
        <Route path="/:pathName" key="redirect" exact component={RedirectPage} />
      </Switch>
    </Router>
  );
}

export default App;
