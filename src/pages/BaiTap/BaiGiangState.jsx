import React, { useState } from "react";

function BaiGiangState(props) {
  const [color, setColor] = useState("white");

  return (
    <>
      <div style={{ height: 100, width: 100, background: `${color}` }}></div>
      <button onClick={() => setColor("red")}>Change to Red</button>
      <button onClick={() => setColor("blue")}>Change to Blue</button>
      <button onClick={() => setColor("white")}>reset</button>
    </>
  );
}

export default BaiGiangState;
