import MapContainer from "./Components/MapContainer/MapContainer";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MapContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
