import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error404 from "./pages/Error";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.scss";
import "./styles/base/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<Error404 />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/:id" element={<Accommodation />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
