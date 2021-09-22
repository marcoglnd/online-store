import React, { useState } from "react";
import Context from "./Context";

export default function Provider({ children }) {
  const [cartItens, setCartItens] = useState(0);

  return (
    <Context.Provider
      value={{
        cartItens,
        setCartItens,
      }}
    >
      {children}
    </Context.Provider>
  );
}
