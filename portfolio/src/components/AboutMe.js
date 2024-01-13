import React from "react";

function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="aboutMeText">
                <h2>About Me</h2>
                <p>I am a 19-year-old student currently pursuing a High School Engineering program at NTI Södertörn in Stockholm, Sweden.</p>
                <p>I am in my second term of the program. Prior to enrolling in this engineering program, I spent three years studying the Information Technology program at the same school.</p>
                <p>
                    Throughout my time at NTI, I have acquired extensive knowledge in programming and various programming languages.
                    Some of the languages I have learnt include Python, Java, C#, HTML, CSS, JavaScript, SQL, PHP, and more.
                </p>
            </div>
            <div className="aboutMeImg"> {/* Placeholder image right now, no clue what im going to replace it with */}
                <img src="https://www.thesprucepets.com/thmb/nKNaS4I586B_H7sEUw9QAXvWM_0=/2121x0/filters:no_upscale():strip_icc()/GettyImages-135630198-5ba7d225c9e77c0050cff91b.jpg" alt="Me" />
            </div>
        </div>
    );
}

export default AboutMe;