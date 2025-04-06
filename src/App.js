import React from "react";
import cx from './App.module.css'
import Home from "./Pages/Home";
import About from "./Pages/About";

import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (

    <Router>
      <nav className={cx.navbar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
