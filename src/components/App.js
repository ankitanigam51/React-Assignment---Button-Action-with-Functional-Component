import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      <button id="click" onClick={showPara}>Show Paragraph</button>
      {<p> Hello, I've learnt to use the full-stack evaluation tool.
         This makes me so happy</p>}
</div>
  );
}


export default App;
