import React from 'react';

const ProjectItem = ({ project }) => {
    const {
        name,
        description,
        deploymentUrl,
        githubRepo,
        image
    } = project;

    return (
        <div className="projectItem">
            <div className="projectItemLeft">
                {/* maybe float left instead of div */}
                <img src={image} alt={name} />  
            </div>

            <div className="projectItemRight">
                <header>
                    <a href={deploymentUrl ? deploymentUrl : githubRepo}>{name}</a>
                    {deploymentUrl ? <a href={githubRepo}>Github</a> : <p>Not deployed</p>}
                </header>

                <p className="projectDesc">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem; 