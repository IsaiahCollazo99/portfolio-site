import React from 'react';
import NavBar from '../navBar/NavBar';
import logo from '../../assets/logo.png';
import '../../css/header/header.css';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, makeStyles, useScrollTrigger } from '@material-ui/core';

const ElevationScroll = ({ children }) => {
	const trigger = useScrollTrigger({
	  disableHysteresis: true,
	  threshold: 0
	});
  
	return React.cloneElement(children, {
	  elevation: trigger ? 4 : 0,
	});
}

const Header = ( props ) => {
    const location = useLocation();

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            padding: '10px 0',
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'row',
            position: 'fixed',
            top: 0,
            justifyContent: location.pathname === "/" ? "center" : 'space-between',
            color: 'black',
            fontFamily: 'Raleway',
            zIndex: 100,
            backgroundColor: location.pathname === "/" ? "transparent" : '#f3f3f3',
            alignItems: 'center',
            justifySelf: 'start',
            alignSelf: 'start',
            height: '11vh',
        }
    }))

    const classes = useStyles();

    return (
        <ElevationScroll {...props}>
        <AppBar className={classes.root} id='header'>
            {location.pathname === "/" ? null : (
                <div className="headerLeft">
                    <Link to="/"><img src={logo} alt="Logo" className="headerLogo" /></Link>
                    
                    <div className="headerText">
                        <a href="https://www.linkedin.com/in/isaiah-collazo-aa0188151/" target="_blank" className="noDecoration white" rel="noopener noreferrer">
                            <p className="headerName">Isaiah Collazo</p>
                        </a>
                        <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank" className="noDecoration grey" rel="noopener noreferrer">
                            <p className="headerJob">Web Developer</p>
                        </a>
                    </div>
                </div>
            )}

            <div className="headerRight">
                <NavBar />
            </div>
        </AppBar>
        </ElevationScroll>
    )
}

export default Header;