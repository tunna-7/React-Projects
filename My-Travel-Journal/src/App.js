import React from "react"
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card
                item = {item}
            />
        )
    })

    return (
        <>
        <NavBar />
        <section className="cards-list">
                {cards}
        </section>
        </>
    )
}