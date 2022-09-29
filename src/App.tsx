import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo-pass-culture.svg";
import News from "./News/News";
import AddNews from "./AddNews/AddNews";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/addNews" element={<AddNews />} />
      </Routes>
    </div>
  );
}

export default App;
