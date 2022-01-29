import React from "react"

export default function Card(props){
    return (
        <div className="mycard">
            <img className="mycard--img" src = {props.item.imageUrl} alt=""/>
            <div className="mycard--text">
                <div className="mycard--first">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="mycard--location">{props.item.location}</span>
                    <span ><a href= {props.item.googleMapsUrl}> View on Google Maps</a></span>
                </div>
                <h1 className="mycard--title">{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p className="mycard--desc">{props.item.description}</p>
            </div>
        </div>
    )
}