import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../components/Forms/UserForms/LoginForm';
import SignupForm from '../../components/Forms/UserForms/SignupForm';
import './WelcomePage.css';

const WelcomeWrapper= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const WelcomeSection = styled.section`
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: sans-serif;
`;

const WelcomeNav = styled.nav`
    width: 100vw;
    height: 5vh;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const LogoButton = styled.button`
    width: 150px;
    height: 75%;
`

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 5vh;
    background-color: black;
    justify-content: space-around;
    align-items: center;
`


const WelcomePage = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
      <Redirect to="/" />
    );

    return (
        <WelcomeWrapper className='wlc-background'>
            <WelcomeNav>
                <LogoButton className='wlc-logo-btn' />
                <div>search bar</div>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
            </WelcomeNav>
            <WelcomeSection>
                <h1 style={{fontSize: '50px'}}>Find your inspiration.</h1>
                <h3>Join the Shuttr community, home to high resolution photos and countless groups.</h3>
                <Link className='wlc-start-btn' to='/signup'>
                    Start for free
                </Link>
            </WelcomeSection>
            <h5>Photo title</h5>
            <h5>by uploader</h5>
            <Footer />
        </WelcomeWrapper>


    );
}

export default WelcomePage;
