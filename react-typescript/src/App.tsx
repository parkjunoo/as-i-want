import React, { useState } from "react";
import Toggle from "./components/Toggle";
import ToggleGroup from "./components/ToggleGroup";

function App() {
  const [toggle, setToggle] = useState(false);
  const [toggleArray, setToggleArray] = useState([]);
  return (
    <div className="App">
      <div
        style={{
          margin: 20,
        }}
      >
        <Toggle size="md" value={toggle} onChange={setToggle} />
        Single Toggle : {String(toggle)}
      </div>
      <div
        style={{
          margin: 20,
        }}
      >
        <ToggleGroup value={toggleArray} onChange={setToggleArray}>
          <Toggle id="banana" size="sm" />
          <Toggle id="kiwi" size="md" />
          <Toggle id="apple" size="lg" />
        </ToggleGroup>
        Multi Toggle : {toggleArray.join(", ")}
      </div>
    </div>
  );
}

export default App;
