import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterPage from './CharacterPage';
import CreateCharacter from './CreateCharacter';

const Routes = () => (
  <Switch>
    {/* Route for the home page */}
    <Route exact path="/" component={CharacterPage} />
    {/* Route for the create character page */}
    <Route path="/create" component={CreateCharacter} />
  </Switch>
);

export default Routes;
