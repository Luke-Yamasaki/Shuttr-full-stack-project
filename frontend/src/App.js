import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import WelcomePage from './pages/WelcomePage';
import Homepage from './pages/Homepage';
import AuthenticationPage from './pages/AuthenticationPage';
import ImagesPage from './pages/ImagesPage';
import SingleImagePage from './pages/SingleImagePage';
import UsersPage from './pages/UsersPage';
import TagsPage from './pages/TagsPage';
import UploadPage from './pages/UploadPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/404Page';


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
      <Route exact path="/images">
        <ImagesPage />
      </Route>
      <Route path="/images/:id">
        <SingleImagePage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/users/:id">
        <UsersPage />
      </Route>
      <Route path="/tags">
        <TagsPage />
      </Route>
      <Route path="/tags/:id">
        <TagsPage />
      </Route>
      <Route path="/upload">
        <UploadPage />
      </Route>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
