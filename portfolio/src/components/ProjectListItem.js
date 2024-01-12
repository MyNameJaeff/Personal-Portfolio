import React from "react";
import ProjectList from "./Projects.json";

function ProjectListItem(props) {
    let list = ProjectList.projects;
    const largeFirstLetter = (props.name).charAt(0).toUpperCase() + (props.name).slice(1);

    function handleClick(e) {
        const project = document.querySelector(".project");
        project.innerHTML = `<p class="project">${list[props.number-1].text}</p>`;
    }

    return (
        <li onClick={handleClick} className={props.name + props.number}>{largeFirstLetter + " " + props.number}</li>
    );
}

export default ProjectListItem;