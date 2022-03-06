import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import WelcomePage from './pages/WelcomePage';
import Homepage from './pages/Homepage';
import AuthenticationPage from './pages/AuthenticationPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
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
