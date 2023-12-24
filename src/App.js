import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, Setcount] = useState(0);
  const [item, Setitem] = useState(0);

  
  const Miltememo = useMemo( function milticount(){

    console.log("milticount")
  },[count])

  return (
    <div className="App">
      <h1> UseMemo Hook in React js </h1>
      <h2> Count : {count} </h2>
      <h2> Item: {item} </h2>
       <h2> {Miltememo} </h2>
      <button onClick={() => Setcount(count + 1)}> Update Count </button>
      <button onClick={() => Setitem(item + 5)}> Update Count </button>
    </div>
  );
}

export default App;
