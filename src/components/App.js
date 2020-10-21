import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, changePara] = useState("");

  function handleClick() {
    const newPara = (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
    changePara(newPara);
  }

  return (
    <div id="main">
      <button id="click" onClick={() => handleClick()}>
        Click
      </button>
      {para}
    </div>
  );
}

export default App;
