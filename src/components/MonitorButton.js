import React from "react";
import baseOfMonitor from "./images/BaseOfMonitor.png";

function MonitorButton(props) { // props: id, text
    const largeFirstLetter = (props.text).charAt(0).toUpperCase() + (props.text).slice(1);
    
    return (
        <a href={`#${props.id}`} className="monitorButton">
            <div className="monitorFrame">
                <p className="monitorLogo">{largeFirstLetter}</p>
                <div className="monitorScreen">
                    <div className="monitorContent">
                        <pre className="monitorText">
                            {`<!`}<span className="greenText">DOCTYPE </span><span className="purpleText">html</span>{`>`}<br />
                            {`<`}<span className="greenText">html </span><span className="purpleText">lang</span>=<span className="blueText">"en"</span>{`>`}<br />
                            {`<`}<span className="greenText">body</span>{`>`}<br />
                            {` <`}<span className="greenText">h1</span>{`>`}<br />
                            {`   <`}<span className="greenText">a </span><span className="purpleText">href</span>=<span className="blueText">"/{props.text}"</span>{`>`}<span className="lightPurpleText">{largeFirstLetter}</span>{`</`}<span className="greenText">a</span>{`>`}<br />
                            {` <`}<span className="greenText">h1</span>{`>`}<br />
                            {`<`}<span className="greenText">body</span>{`>`}<br />
                            {`<`}<span className="greenText">html</span>{`>`}<br />
                        </pre>
                    </div>
                </div>
            </div>
            <div className="monitorStand">
                <div className="monitorStandPole"></div>
                <div className="monitorbase">
                    <img src={baseOfMonitor} alt="base of a monitor" />
                </div>
            </div>
        </a>
    );
}

export default MonitorButton;