import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";
import DataContextProvider from "./components/context/DataContextProvider";
import TimeOut from "./components/Data/TimeOut";
function App() {
  return (
    <div className="App">
        <DataContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/timeout" element={< TimeOut/>} />
        </Routes>
    </DataContextProvider>
      </div>
  );
}

export default App;
