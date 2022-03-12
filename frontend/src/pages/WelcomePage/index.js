import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import LoginForm from '../../components/Forms/UserForms/LoginForm';
import SignupForm from '../../components/Forms/UserForms/SignupForm';
import Searchbar from '../../components/Searchbar';
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
    justify-content: space-around;
    align-items: center;
`;

const LogoButton = styled.button`
    width: 100px;
    height: 33px;
`;


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
    const imagesObj = useSelector(state => state.imagesState.images);
    const imagesArr = Object.values(imagesObj);
    const usersObj = useSelector(state => state.usersState.users);
    const usersArr = Object.values(usersObj);

    const [randomImages, setRandomImages] = useState('');

    const imagesUsers = () => {
        const randomImagesArr = [];

        let count = 0;

        while(count < 100) {
            randomImagesArr.push(imagesArr[Math.floor(Math.random()) * 100])
        };

        setRandomImages(randomImagesArr);
    }


    if (sessionUser) return (
      <Redirect to="/" />
    );

    return (
        <WelcomeWrapper className='wlc-background' style={{backgroundImage: `url({sessionUser.profileImageUrl})`}}>
            <Navbar />
            <WelcomeSection>
                <h1 style={{fontSize: '50px'}}>Find your inspiration.</h1>
                <h3>Join the Shuttr community, home to hndreds of high resolution photos.</h3>
                <Link className='wlc-start-btn' to='/signup'>
                    Start for free
                </Link>
            </WelcomeSection>
            <h5 className='wlc-photo-title'>Photo title</h5>
            <h5 className='wlc-user-info'>by uploader</h5>
            <Footer>
                <Link className='wlc-footer-text' to='/about'>About</Link>
                <Link className='wlc-footer-text' to='/services/designer'>Designers</Link>
                <Link className='wlc-footer-text' to='/services/developer'>Developers</Link>
                <a href='https://github.com/Luke-Yamasaki/Shuttr-full-stack-project' className='wlc-footer-text'>GitHub</a>
                <a href='https://www.linkedin.com/in/lukeyamasaki/' className='wlc-footer-text'>LinkedIn</a>
                <a href='https://www.behance.net/lukeyamasac140' className='wlc-footer-text'>Behance</a>
            </Footer>
        </WelcomeWrapper>
    );
}

export default WelcomePage;
