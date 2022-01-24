import React from "react"
import logo from "../images/react-logo.png"

export default function Header(){
    return (
        <nav className="my-nav">
            <img className="my-img" src = {logo} alt="" />
            <h2 className="react-facts">ReactFacts</h2>
            <h4>React Course - Project 1</h4>   
        </nav>
    )
}