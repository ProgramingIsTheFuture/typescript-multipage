import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "../Global/globalstyles";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={() => <p>Hello</p>} />
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
