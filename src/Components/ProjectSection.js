import {useEffect, useState} from "react";
import Project from "./Project";
import Data from '../resources/projects.json';

export default function ProjectSection() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(Data.projects);

    }, []);

    return(
        <div id="projects">
            <hgroup>
                <h2>Projects</h2>
                <h3>These are the projects I have created or collaborated on through the years ✏️</h3>
            </hgroup>
            <div>
                { projects.map(projectData =>
                    <Project title={projectData.title} image={projectData.image} summary={projectData.description} link={projectData.link}/>
                )}
            </div>
        </div>
    );
}