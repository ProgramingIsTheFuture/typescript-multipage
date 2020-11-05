import { StoreProvider } from "easy-peasy";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes";
import { Store } from "./Store";


ReactDOM.render(<StoreProvider store={Store} ><App /></StoreProvider>, document.getElementById("root"));
