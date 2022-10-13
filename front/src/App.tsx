import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import { decrement, increment } from "./reducers/todoReducer";

function App() {
  const dispath = useDispatch();
  const count = useSelector((state: RootState) => state.todo.count);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispath(increment())}>+</button>
      <button onClick={() => dispath(decrement())}>-</button>
    </div>
  );
}

export default App;
