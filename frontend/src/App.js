import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Homepage from './pages/Homepage';
import AuthenticationPage from './pages/AuthenticationPage';

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
        <AuthenticationPage mode={'login'} />
      </Route>
      <Route path="/signup">
      <AuthenticationPage mode={'signup'} />
      </Route>
      <Route>
        <p>404 Page Not Found.</p>
      </Route>
    </Switch>
  );
}

export default App;
