import React from "react";

function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="aboutMeText">
                <h2>About Me</h2>
                <p>I am a 19-year-old student currently pursuing a Higher Vocational Education Diploma at Chas Academy located in Stockholm, Sweden.</p>
                <p>I am in my first term of the program. Prior to enrolling in this engineering program, I spent three years studying the Information Technology program at NTI Södertörn, where i also studied a technical base year (TE4).</p>
                <p>
                    Throughout my time as a developer, I have acquired extensive knowledge in programming and various programming languages.
                    Some of the things i have learnt include Python, C#, HTML, CSS, JavaScript, SQL, react, PHP, and more.
                </p>
            </div>
            <div className="aboutMeImg"> {/* Placeholder image right now, no clue what im going to replace it with */}
                <img src="https://ntigymnasiet.se/wp-content/uploads/sites/20/2023/05/nti-informations-medie-teknik-202204.png" alt="Me" />
            </div>
        </div>
    );
}

export default AboutMe;