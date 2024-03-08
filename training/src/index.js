import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./component/router/first";
import Contact from "./component/router/contact";
import About from "./component/router/about";
import ClassComponent from "./component/class";
import Redux from "./component/redux";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    
    <Routes>
     <Route path="/" element={<First />} />
      <Route path="/class" element={<ClassComponent />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:name" element={<About />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
