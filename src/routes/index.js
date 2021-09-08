import { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Home from "../pages/index";
import Compose from "../pages/compose";

const RootRouter = () => {
  const location = useLocation();
  const background = location.state?.background || location;
  return (
    <Fragment>
      <Switch location={background}>
        <Route path="/" component={Home} exact />
      </Switch>
      <Route path="/compose" component={Compose} />
    </Fragment>
  );
};

export default RootRouter;
