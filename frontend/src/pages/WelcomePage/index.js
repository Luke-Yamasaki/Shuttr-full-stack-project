import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

const WelcomeBackground = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
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


const WelcomePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [userAction, setUserAction] = useState('login')

    if (sessionUser) return (
      <Redirect to="/" />
    );

    return (
        <WelcomeWrapper className='wlc-background'>
            <WelcomeNav>
                <LogoButton className='wlc-logo-btn' />
            </WelcomeNav>
            <WelcomeBackground  />
        </WelcomeWrapper>


    );
}

export default WelcomePage;
