import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../css/projects/projectItems.css';

const ProjectItem = ({ project }) => {
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
                        <p className="legend">{i + 1}</p>
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
        <div className="projectItem">
            <div className="projectItemLeft">
                {/* maybe float left instead of div */}
                {images.length ? 
                    <Carousel>
                        {imagesList}
                    </Carousel> : 
                    imagesList
                }
            </div>

            <div className="projectItemRight">
                <header>
                    <a href={deploymentUrl ? deploymentUrl : githubRepo} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                    {deploymentUrl ? <a href={githubRepo} target="_blank" rel="noopener noreferrer">Github</a> : <p>Not deployed</p>}
                </header>

                <p className="projectDesc">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem; 