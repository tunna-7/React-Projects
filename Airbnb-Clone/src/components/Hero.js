import React from "react"
import photogrid from "../images/photo-grid.png"

export default function Hero(){
    return (
        <section>
            <img className="hero-pic" src= {photogrid} alt="" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}