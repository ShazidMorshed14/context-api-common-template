import { useState } from "react";
import "./App.css";
import ItemOne from "./components/ItemOne/ItemOne";
import ItemTwo from "./components/ItemTwo/ItemTwo";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>context api checking</h1>
      <ItemOne />
      <ItemTwo />
    </div>
  );
}

export default App;
