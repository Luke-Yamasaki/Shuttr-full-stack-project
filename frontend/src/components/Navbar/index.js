import React, {useState, useEffect } from 'react';
import {useHistory, Redirect, NavLink, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import styled from 'styled-components';
import Searchbar from '../Searchbar';
import styles from './Navbar.module.css';
import ProfileButton from './ProfileButton';
import * as sessionAction from '../../store/session';

const NavWrapper = styled.div`
    width: 100vw;
    height: 5vh;
    background-color: #212124;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavUl = styled.ul`
    min-height: 4vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoButton = styled.button`
    width: 100px;
    height: 33px;
`;

const AboutWrapper = styled.div`
    width: 150px;
    min-height: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const AboutPopup = styled.div`
    position: absolute;
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: grey;
    border-radium: 0.25rem;
`;

const WelcomeNav = styled.nav`
    width: 100vw;
    height: 5vh;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Navbar = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showAbout, setShowAbout] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        dispatch(sessionAction.restoreUser()).then(() => setIsLoaded(true))
    })

    const handleClick = (e) => {
        e.preventDefault();
        return history.push('/')
    };

    const handleLogout = () => {
        if (sessionUser) {
          dispatch(logout());
        } else {
          history.push("/");
        }
    };

    let sessionLinks;

    if(sessionUser) {
        sessionLinks = (
            <NavWrapper>
                <NavUl>
                    <div className={styles.logoBtn} onClick={handleClick}>
                    </div>
                    <NavLink to={`/users/{sessionUser.id}`} className={styles.navItem} >You</NavLink>
                    <NavLink to='/images' className={styles.navItem}>Explore</NavLink>
                    <Searchbar></Searchbar>
                    <NavLink to='/upload' className={styles.navItem}>Upload</NavLink>
                    <ProfileButton style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} user={sessionUser}></ProfileButton>
                </NavUl>
            </NavWrapper>
        )
    } else {
        sessionLinks = (
            <WelcomeNav>
                <LogoButton className='wlc-logo-btn'>
                    <NavLink to='/login' className='wlc-logo-link' />
                </LogoButton>
                <Searchbar />
                <NavLink className='wlc-login-btn' to='/login'>Log In</NavLink>
                <NavLink className='wlc-signup-btn'to='/signup'>Sign Up</NavLink>
            </WelcomeNav>
        )
    }

    return (
        <>
          {isLoaded && sessionLinks}
        </>
    );
}

export default Navbar;
