import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import People from "./components/People";
import Person from "./components/Person";
import NoPage from "./components/NoPage";
import { staff } from "./data/staff";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define individual routes without a global navigation */}
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<People staff={staff} />}>
          <Route path=":personId" element={<Person staff={staff} />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
