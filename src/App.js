import React from "react";
import "./App.css";
import {
  EmailCard,
  Emails,
  FIlterOptions,
  FilterButton,
  ViewEmail,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="main-section">
        <Emails />
        <Routes>
          <Route path=":id" element={<ViewEmail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
