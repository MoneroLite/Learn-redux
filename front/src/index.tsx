import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

export type IStatus = { cash: number };

const defStatus: IStatus = {
  cash: 0,
};

const reducer = (state = defStatus, action: any) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { ...state, cash: state.cash + action.payload };
    case "GET_MONEY":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};
//
const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
