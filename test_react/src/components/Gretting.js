import React, { useState } from "react";

export default function Gretting() {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div>Gretting</div>

      {!showText && <div>hello</div>}
      {showText && <div>no</div>}
      <button onClick={() => setShowText(true)}>ShowText</button>
    </>
  );
}
