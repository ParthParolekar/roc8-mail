import React, { useEffect } from "react";
import "./App.css";
import { Emails, FIlterOptions, FilterButton, ViewEmail } from "./components";
import { Route, Routes, useRoutes } from "react-router-dom";

function App() {
  const element = <Emails />;

  const AllEmails = () =>
    useRoutes(["/", "/:id"].map((path) => ({ path, element })));

  return (
    <div className="App">
      <main className="main-section">
        <AllEmails />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/:id" element={<ViewEmail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
