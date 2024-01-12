import React from "react";

function NameAndTitle(props) {
    return (
        <div className="nameAndTitle" id="home">
            <h1>{props.name}</h1>
            <h2>{props.title}</h2>
        </div>
    );
}

export default NameAndTitle;