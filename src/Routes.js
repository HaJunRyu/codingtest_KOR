import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HOME_PAGE } from './constant';
import Home from './Pages/Home';
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME_PAGE} component={Home} />
        <Redirect to={HOME_PAGE} />
      </Switch>
    </Router>
  );
};

export default Routes;
