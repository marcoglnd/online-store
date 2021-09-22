import React, { useState, useEffect } from "react";

function Tag({ tag }) {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [border, setBorder] = useState("none");
  const [color, setColor] = useState("#666666");
  const [visibility, setVisibility] = useState("visible");
  const style = {
    backgroundColor: backgroundColor,
    border,
    color,
    visibility,
  };

  useEffect(() => {
    if (tag === "20% Off") {
      setBackgroundColor("#EBD7CE");
    } else if (tag === "Lançamento") {
      setBackgroundColor("#824D3E");
      setColor("white");
    } else if (tag === "Verão 2022") {
      setBorder("1px solid #666666");
    } else {
      setVisibility("hidden");
    }
  }, []);

  return (
    <div className="tag" style={style}>
      <span>{tag}</span>
    </div>
  );
}

export default Tag;
