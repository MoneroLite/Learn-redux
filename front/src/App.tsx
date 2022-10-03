import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { IStatus } from "./index";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: IStatus) => state.cash);

  const addMoney = (cash: any) => {
    dispatch({ type: "ADD_MONEY", payload: cash });
  };

  const getMoney = (cash: any) => {
    dispatch({ type: "GET_MONEY", payload: cash });
  };

  return (
    <div className="App">
      <p>Баланс: {cash}</p>
      <button onClick={() => addMoney(Number(prompt()))}>внести</button>
      <button onClick={() => getMoney(Number(prompt()))}>снять</button>
    </div>
  );
}

export default App;
