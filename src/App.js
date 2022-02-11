import React from 'react';
import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
      <nav>
        <Link to="/animation">Animation</Link> |{" "}
        <Link to="/keyframes">Keyframes</Link> |{" "}
        <Link to="/tap">Tap</Link> |{" "}
        <Link to="/focus">Focus</Link> |{" "}
        <Link to="/svg">SVG</Link> |{" "}
        <Link to="/crypto">Crypto</Link>
      </nav>
    </div>
  );
}

export default App;
