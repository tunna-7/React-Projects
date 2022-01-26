import React from "react"

export default function MainBody(){
    return (
        <div className="my--mainbody">
            <h3 className="name">Ayush Wunnava</h3>
            <h5 className="tag">Blockchain Developer & UI / UX Designer</h5>
            <div>
                <a class="css-button1">
                    <span class="css-button1-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <span class="css-button1-text"><span>Email</span></span>
                </a>
                <a class="css-button">
                    <span class="css-button-icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                    <span class="css-button-text">LinkedIn</span>
                </a>
            </div>
            <div >
                <h5 className="about">About</h5>
                <h6 className="about-des">I am a Student with suitable knowledge of web dev,<br></br> 
                    blockchain, app dev and design. I also love <br></br>exploring various
                    fields and expanding my<br></br> technical knowledge.
                </h6>
            </div>
            <div>
                <h5 className="about">Interests</h5>
                <h6 className="about-des"> Blockchain, Web Developmenet, UI/UX Design,<br></br> Watching & Playing
                Football and Basketball,<br></br> Travelling, Photography, Music, Hip-Hop Culture,<br></br> Anime, Web Series,
                Gaming 
                </h6>
            </div>
        </div>
    )
}