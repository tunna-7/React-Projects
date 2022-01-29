import React from "react"
import logo from "../images/airbnb-logo.png"

export default function NavBar(){
    return (
        <nav>
            <img className="navbar-logo" src= {logo} alt="" />
        </nav>
    )
}