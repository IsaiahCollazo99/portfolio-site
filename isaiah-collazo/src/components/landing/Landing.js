import { Button } from '@material-ui/core';
import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import { useHistory } from 'react-router-dom';
import '../../css/landing/landing.css';

const Landing = () => {
    const history = useHistory();

    const redirect = () => {
        history.push("/projects");
    }

    return (
        <section className="landing">
            <section className="landingInfo">
                <h1>
                    <span className="startTitles">></span> <ReactRotatingText items={[" DEVELOPER", " DESIGNER", " MENTOR", " INNOVATOR"]} />
                </h1>
            </section>

            <Button
                variant="contained"
                color="secondary"
                onClick={redirect}
            >
                View My Work
            </Button>
        </section>
    )
}

export default Landing;