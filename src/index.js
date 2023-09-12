import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import Page3 from "./pages/page3/page3";
import Page4 from "./pages/page4/page4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/selectCategory" element={<Page2 />} />
        <Route path="/profile" element={<Page3 />} />
        <Route path="/browse" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
