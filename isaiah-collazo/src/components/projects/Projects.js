import React from 'react';
import ProjectItem from './ProjectItem';
import projectsList from '../../util/projectsList';
import '../../css/projects/projects.css';

const Projects = () => {
    const getProjectComponents = () => {
        const projectListComponent = [];
        let i = 0;
        for(let key in projectsList) {
            const projectObj = projectsList[key];
            let display;
            if(i % 2 === 0) {
                display = "regular";
            } else {
                display = "reverse";
            }
            projectListComponent.push(<ProjectItem project={projectObj} key={key} display={display}/>);
            i++;
        }
        return projectListComponent;
    }
    
    const projectListComponent = getProjectComponents();
    
    return (
        <div className="projectsPageContainer">
            {projectListComponent}
        </div>
    )
}

export default Projects;