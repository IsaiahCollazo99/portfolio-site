import React from 'react';
import isaiah from '../../assets/image_me.jpg';
import '../../css/home/home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const directToTwitter = () => {
        window.open("https://twitter.com/IsaiahCollazo8");
    }
    
    return (
        <div className="homePageContainer">
            <div className="aboutMe">
                <a href="https://www.instagram.com/theycallme_zay_/" target="_blank" rel="noopener noreferrer">
                    <img src={isaiah} alt="isaiah" className="aboutMeImg" />
                </a>

                <div className="aboutMeText">
                    <h1 className="aboutMeTitle" onClick={directToTwitter}>
                        This is me
                    </h1>
                    <div className="aboutMePgraph">
                        For as long as I can remember I've been writing down ideas for apps and games that I wanted to make some day, not really knowing the path to get there.
                        It wasn't until high school that I found the game development software, RPG Maker. That began my love for problem solving. RPG Maker was built using JavaScript and 
                        I would spend hours just doing research on what they used and how to make certain things within the program more custom using the language. The games I built were
                        always small but ambitious, and I just used them as learning experiences.
                            <br />
                            <br />
                        Using JavaScript with the program inclined me to look further into what the language could be used for, with that I found web development. By my senior year in high
                        school it was all I could think about. The ability to think of an idea and be able to see it's creation in front of your eyes, slowly building as you go, that's my
                        favorite part. I'm finally able to make that childhood dream a reality.
                    </div>
                    
                </div>
            </div>
            <Link to="/projects" className="callToAction">
                <button>View My Work</button>
            </Link>
        </div>
    )
}

export default Home;