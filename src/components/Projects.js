import React from "react";

import ProjectListItem from "./ProjectListItem";
import ProjectList from "./Projects.json";

function Projects() { 
    let list = ProjectList.projects;


    return (
        <div className="projects">
            <div className="projectScreen">
                <div className="projectContent">
                    <div className="projectText">
                        <div className="project">
                            <p>PLEASE SELECT A PROJECT</p>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projectSelection">
                <div className="projectSelectionContent">
                    <div className="projectSelectionText">
                        <h2>Projects</h2>
                        <ul> 
                            {
                                list.map((project) => {
                                    return (
                                        <ProjectListItem name={project.name} number={project.number} key={project.id} text={project.text}/>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;