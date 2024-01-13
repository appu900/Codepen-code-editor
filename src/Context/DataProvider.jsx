import React, { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        javascript,
        setJavascript,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}




