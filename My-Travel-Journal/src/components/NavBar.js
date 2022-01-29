import React from "react"
import logo from "../images/mytraveljournal-icon.png"
export default function NavBar(){
    return (
        <nav className="mynav">
            <img src= {logo} alt="" className="mynav--img"/>
            <h2 className="mynav--header">my travel journal</h2>
        </nav>
    )
}