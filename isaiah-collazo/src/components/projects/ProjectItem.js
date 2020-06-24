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

    const getImagesList = () => {
        let imagesList = [];

        if(images.length) {
            imagesList = images.map((image, i) => {
                return (
                    <div key={i} className="imageWrapper">
                        <img src={image} alt={name}/>
                    </div>
                )
            })
        } else {
            return <p className="error">No images found</p>
        }

        return imagesList;
    }

    const imagesList = getImagesList();

    return (
        <div className={`projectItem ${display}`}>

            <header>
                <a href={deploymentUrl ? deploymentUrl : githubRepo} target="_blank" rel="noopener noreferrer">
                    {name}
                </a>
                {deploymentUrl ? <a href={githubRepo} target="_blank" rel="noopener noreferrer">Github</a> : <p>Not deployed</p>}
            </header>
            
            <div className="projectItemMain">
                {/* maybe float left instead of div */}
                {images.length ? 
                    <Carousel>
                        {imagesList}
                    </Carousel> : 
                    imagesList
                }

                <p className="projectDesc">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem; 