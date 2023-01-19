import React from "react";
import "./App.css";
import { Emails, FIlterOptions, ViewEmail } from "./components";
import { Route, Routes, useRoutes } from "react-router-dom";

function App() {
  const element = <Emails />;

  const AllEmails = () =>
    useRoutes(["/", "/:id"].map((path) => ({ path, element })));

  return (
    <div className="App">
      <FIlterOptions />
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
