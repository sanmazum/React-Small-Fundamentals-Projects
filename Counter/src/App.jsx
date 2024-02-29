import "./App.css";
import { useState } from "react";

function App() {
  //* This Counter -> variable ; setcounter - it is a function or a method (can say) */
  const [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter(counter + 1);
  };

  const removeValue = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <h1> Learn Basic Concepts of React With Sandeepan! {counter}</h1>
      <h1> Counter value : {counter} </h1>
      <button onClick={addValue}> Add Value </button>
      {"  "}
      <button onClick={removeValue}> Remove Value Value </button>
      <p> Footer : {counter} </p>
    </>
  );
}

export default App;
