import React, {useState, useEffect } from 'react';
import {useHistory, Redirect, NavLink, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import styled from 'styled-components';
import Searchbar from '../Searchbar';
import SmallSearch from '../Searchbar/SmallSearch';
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
    width: 60vw;
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
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    zindex: 1;
`;

const Navbar = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showAbout, setShowAbout] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        dispatch(sessionAction.restoreUser()).then(() => setIsLoaded(true))
    },[dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        return history.push('/')
    };

    // const handleLogout = () => {
    //     if (sessionUser) {
    //       dispatch(logout());
    //     } else {
    //      <Redirect to='/'/>
    //     }
    // };

    let sessionLinks;

    if(sessionUser) {
        sessionLinks = (
            <NavWrapper>
                <NavUl>
                    <div className={styles.logoBtn} onClick={handleClick}>
                    </div>
                    <NavLink to={`/users/{sessionUser.id}`} className={styles.navItem} >You</NavLink>
                    <NavLink to='/images' className={styles.navItem}>Explore</NavLink>
                    <SmallSearch />
                    <NavLink to='/upload' className={styles.navCloud}></NavLink>
                    <ProfileButton user={sessionUser}></ProfileButton>
                </NavUl>
            </NavWrapper>
        )
    } else {
        sessionLinks = (
            <WelcomeNav>
                <div style={{width: '80vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <LogoButton className='wlc-logo-btn'>
                        <NavLink to='/login' className='wlc-logo-link' />
                    </LogoButton>
                    <Searchbar />
                    <NavLink className='wlc-login-btn' to='/login'>Log In</NavLink>
                    <NavLink className='wlc-signup-btn'to='/signup'>Sign Up</NavLink>
                </div>

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
