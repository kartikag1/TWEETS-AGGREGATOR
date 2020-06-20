import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InputPage from "./InputPage";
import OutputPage1 from "./OutputPage1";
import OutputPage2 from "./OutputPage2";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InputPage} />
        <Route path="/results/profile/:profile" exact component={OutputPage1} />
        <Route path="/results/tags/:tags" exact component={OutputPage2} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
