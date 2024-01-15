import React from "react";
import ProjectList from "./Projects.json";

function ProjectListItem(props) {
    let list = ProjectList.projects;
    const largeFirstLetter = (props.name).charAt(0).toUpperCase() + (props.name).slice(1);

    function handleClick(e) {
        if(props.number !== 0) {
            const projectMonitor = document.querySelector(".projectText");
            projectMonitor.style.justifyContent = "start";
            projectMonitor.style.alignItems = "start";

            const project = document.querySelector(".project");
            project.style.width = "100%";
            project.style.height = "100%";
            project.style.padding = "5%";
            project.innerHTML = `
            <a href="${list[props.number - 1].link}" target="_blank"><h3 class="projectTitle">${largeFirstLetter}</h3></a>
            <p class="projectTextContent"> ${list[props.number - 1].text}
            `;
        }
    }
    if (props.number !== 0) {
        return (
            <li onClick={handleClick} className={props.name + props.number}>{largeFirstLetter + " "}<span className="listItemNumber">{props.number}</span></li>
        );
    } else {
        return (
            <li className={props.name + props.number}><a href={list[list.length - 1].link} rel="noreferrer" target="_blank">{largeFirstLetter}</a><span className="listItemNumber">*</span></li>
        );
    }
}

export default ProjectListItem;