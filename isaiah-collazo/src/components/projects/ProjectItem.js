import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../css/projects/projectItems.css';

const ProjectItem = ({ project, display }) => {
    const {
        name,
        description,
        deploymentUrl,
        githubRepo,
        images,
        technologies
    } = project;

    const redirectToHost = ( image ) => {
        window.open(image);
    }

    const getImagesList = () => {
        let imagesList = [];

        if(images.length) {
            imagesList = images.map((image, i) => {
                return (
                    <div key={i} className="imageWrapper" onClick={() => redirectToHost(image)} >
                        <img src={image} alt={name} />
                    </div>
                )
            })
        } else {
            return <p className="error">No images found</p>
        }

        return imagesList;
    }

    const imagesList = getImagesList();
    const techList = technologies.map((tech, i) => {
        return (
            <li key={i}>{tech}</li>
        )
    })

    return (
        <div className={`projectItem ${display}`}>
            <div className="projectItemImages">
                {/* maybe float left instead of div */}
                {images.length ? 
                    <Carousel>
                        {imagesList}
                    </Carousel> : 
                    imagesList
                }
            </div>

            <div className="projectItemInfo">
                <header>
                    <p>{name}</p>
                    <p>|</p>
                    {deploymentUrl ? 
                        <a href={deploymentUrl} target="_blank" rel="noopener noreferrer">
                            Live Site
                        </a> :
                        null}
                    <a href={githubRepo} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </header>

                <p className="projectItemDesc">{description}</p>

                <ul className="projectItemTechnologies">
                    {techList}
                </ul>
            </div>

        </div>
    )
}

export default ProjectItem; 