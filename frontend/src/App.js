import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/login">
        <WelcomePage />
      </Route>
      <Route path="/signup">
        <WelcomePage />
      </Route>
    </Switch>
  );
}

export default App;
