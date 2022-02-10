import React from 'react';
import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
      <nav>
        <Link to="/animation">Animation</Link> |{" "}
        <Link to="/keyframes">Keyframes</Link> |{" "}
        <Link to="/gestures">Gestures</Link> |{" "}
        <Link to="/transition">Transition</Link>
      </nav>
    </div>
  );
}

export default App;
