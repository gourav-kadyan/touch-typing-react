import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Practice from "./components/Practice";
import Result from "./components/Result";
import About from "./components/About";

function App() {
  return (
    <>
        <Router>
          <Navigation />

          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/practice" element={<Practice/>} />
            <Route path="/result" element={<Result/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
