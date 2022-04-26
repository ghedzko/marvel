import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App";
import { store } from "./state/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersScreen from "./routes/Characters/Characters.screen";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
