import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error";
import Home from "./pages/Home";
import "./styles/index.scss";
import "./normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
