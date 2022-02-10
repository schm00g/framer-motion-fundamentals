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
import Transition from "./routes/transition";
import Gestures from "./routes/gestures";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="animation" element={<Animation />} />
      <Route path="keyframes" element={<Keyframes />} />
      <Route path="transition" element={<Transition />} />
      <Route path="gestures" element={<Gestures />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// how to use react-router
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

// TODO: had to roll back to framer-motion 5 - y tho?