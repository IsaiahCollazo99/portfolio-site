import React from 'react';
import ProjectItem from './ProjectItem';
import projectsList from '../../util/projectsList';

const Projects = () => {
    const getProjectComponents = () => {
        const projectListComponent = [];
        for(let key in projectsList) {
            const projectObj = projectsList[key];
            projectListComponent.push(<ProjectItem project={projectObj} />);
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