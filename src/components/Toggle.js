import React, { useState } from "react";

function Toggle() {
  return <button>OFF</button>;
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  return (
    // <button>OFF</button>;

    <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;
