import React from "react";

import gitHubLogo from "./images/GitHubLogo.png";
import linkedInLogo from "./images/LinkedInLogo.png";
import discordLogo from "./images/DiscordLogo.png";
import spotifyLogo from "./images/SpotifyLogo.png";

function Contact(props) {
    return (
        <div className="contact" id="contact">
            <div className="locationInfo">
                <h2>Location</h2>
                <div className="locationInfo">
                    <div className="locationInfoItem">
                        <p>{props.location}</p>
                    </div>
                </div>
            </div>
            <div className="aroundTheWeb">
                <h2>Around the Web</h2>
                <div className="aroundTheWeb">
                    <div className="aroundTheWebItem">
                        <a href={props.github} target="_blank" rel="noreferrer"><img src={gitHubLogo} alt="github logo"/></a>
                    </div>
                    <div className="aroundTheWebItem">
                        <a href={props.linkedin} target="_blank" rel="noreferrer"><img src={linkedInLogo} alt="linkedIn logo"/></a>
                    </div>
                    <div className="aroundTheWebItem">
                        <a href={props.discord} target="_blank" rel="noreferrer"><img src={discordLogo} alt="discord logo"/></a>
                    </div>
                    <div className="aroundTheWebItem">
                        <a href={props.spotify} target="_blank" rel="noreferrer"><img src={spotifyLogo} alt="spotify logo"/></a>
                    </div>
                </div>
                <a className="copyright" href="https://personal-portfolio-three-henna.vercel.app"><span className="copyIcon">©</span> https://personal-portfolio-three-henna.vercel.app 2024 </a>
            </div>
            <div className="contactInfo">
                <h2>Contact</h2>
                <div className="contactInfo">
                    <div className="contactInfoItem">
                        <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">{props.email}</a>
                    </div>
                    <div className="contactInfoItem">
                        <a href={`tel:${props.phone}`} target="_blank" rel="noreferrer">{props.phone}</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;