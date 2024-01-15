import React from "react";
import { Analytics } from '@vercel/analytics/react';

import "./Main.css";

import NameAndTitle from "./components/NameAndTitle.js";
/* import DarkAndLight from "./components/DarkAndLight.js"; */ /* CURRENTLY NOT GOOD ENOUGH */
import MonitorButton from "./components/MonitorButton.js";
import Projects from "./components/Projects.js";
import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";

function Main() {
    return (
        <main>
            {/* <DarkAndLight /> */}
            <Analytics />
            <link href="https://fonts.cdnfonts.com/css/jetbrains-mono" rel="stylesheet"></link>
            <NameAndTitle name="Fredrik Andersson" title="I dont know my title" />
            <div className="monitorButtons">
                <MonitorButton id="about" text="about" />
                <MonitorButton id="projects" text="projects" />
                <MonitorButton id="contact" text="contact" />
            </div>
            <div className="projectsDiv" id="projects">
                <Projects />
            </div>
            <div className="aboutDiv" id="about">
                <AboutMe />
            </div>
            <div className="contactDiv" id="contact">
                <Contact
                    email="fredrik04@hotmail.com"
                    phone="+46 073 99 59 784"
                    location="Stockholm, Sweden"
                    github="https://github.com/MyNameJaeff"
                    linkedin="https://www.linkedin.com/in/fredrik-andersson-2006412aa/"
                    discord="http://discordapp.com/users/319445588493991938"
                    spotify="https://open.spotify.com/user/fredrik2004" />
            </div>
        </main>
    );
}

export default Main;