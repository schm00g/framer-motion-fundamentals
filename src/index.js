import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Animation from "./routes/animation";
import Keyframes from "./routes/keyframes";
import Tap from "./routes/tap";
import SVG from "./routes/svg";
import Focus from "./routes/focus";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="animation" element={<Animation />} />
      <Route path="keyframes" element={<Keyframes />} />
      <Route path="tap" element={<Tap/>} />
      <Route path="svg" element={<SVG />} />
      <Route path="focus" element={<Focus />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();