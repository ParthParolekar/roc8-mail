import React from "react";
import "./App.css";
import { EmailCard, FilterButton } from "./components";

function App() {
  return (
    <div className="App">
      <EmailCard />
      <EmailCard />
      <FilterButton />
    </div>
  );
}

export default App;
