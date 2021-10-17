import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HOME_PAGE, BEER_LIST_PAGE } from './constant';
import { Home, BeerList } from './pages';
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME_PAGE} component={Home} />
        <Route path={BEER_LIST_PAGE} component={BeerList} />
        <Redirect to={HOME_PAGE} />
      </Switch>
    </Router>
  );
};

export default Routes;
