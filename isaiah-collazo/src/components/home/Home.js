import React from 'react';
import isaiah from '../../assets/image_me.jpg';

const Home = () => {
    return (
        <div className="homePageContainer">
            <div className="aboutMe">
                <div className="aboutMeLeft">

                </div>
                <div className="aboutMeRight">
                    <img src={isaiah} alt="isaiah" className="aboutMePic"/>
                </div>
            </div>
        </div>
    )
}

export default Home;