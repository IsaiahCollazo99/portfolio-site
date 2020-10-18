import React from 'react';
import isaiah from '../../assets/image_me.jpg';
import '../../css/home/home.css';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = () => {
    const history = useHistory();

    const directToTwitter = () => {
        window.open("https://twitter.com/IsaiahCollazo8");
    }

    const redirect = () => {
        history.push("/projects");
    }
    
    return (
        <div className="homePageContainer">
            <div className="aboutMe">
                <a href="https://www.instagram.com/theycallme_zay_/" target="_blank" rel="noopener noreferrer" className="imgContainer">
                    <img src={isaiah} alt="isaiah" className="aboutMeImg" />
                </a>

                <div className="aboutMeText">
                    <h1 className="aboutMeTitle" onClick={directToTwitter}>
                        This is me
                    </h1>
                    <div className="aboutMePgraph">
                        Hi! I'm Isaiah, I'm a proud Puerto Rican born and raised in the beautiful NYC. I grew up loving video games, my brother and I would play everything together. 
                        But that love for games grew, and in my later years of elementary school I started writing down ideas for games, and apps. I would even tape them up
                        to my wall cause I was so proud of them. My favorite at the time was <span className="bold">Splatter</span> where you would play as different colors and 
                        traverse through these crazy levels I would write down in extreme detail. 
                            <br />
                            <br />
                        It wasn't until my freshman year of high school that I would find RPG Maker MV. It opened up a whole new door for me, and within my first year of using it I had 
                        "finished" my first game ever. <span className="bold">Amulet of Abell.</span> The game was <span className="em">horrible</span>, but I loved it. As I explored 
                        MV I taught myself how to write in JavaScript, the programs language. Iused it to customize my games, and fell in love with it even more.
                            <br />
                            <br />
                        By my senior year it was all I could think about. I now had the ability to think of an idea and see it's creation in front of my eyes. Watching my projects
                        slowly evolve overtime was, and still is my favorite part. It's been 4 years since then and I attended school at Rochester Institute of Technology before I 
                        found my home at <a href="https://pursuit.org" target="_blank" rel="noopener noreferrer">Pursuit</a>. I'm excited to not only develop my ideas, but also
                        to contribute to the development of others. That's what I love about coding.
                    </div>
                    
                </div>
            </div>
            <Button
                variant="contained"
                onClick={redirect}
                color="primary"
                className="callToAction"
            >
                View My Work
            </Button>
        </div>
    )
}

export default Home;