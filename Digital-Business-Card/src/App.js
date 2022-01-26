import React from "react";
import Header from "./components/Header"
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

export default function App(){
    return (
        <div className="my--app">
        <Header />
        <MainBody />
        <Footer />
        </div>
    )
}