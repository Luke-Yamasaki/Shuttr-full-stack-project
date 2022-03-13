import {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';

import './AuthenticationPage.css';
import LoginForm from '../../components/Forms/UserForms/LoginForm';
import SignupForm from '../../components/Forms/UserForms/SignupForm';

const AuthWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const UserNav = styled.nav`
    width: 100vw;
    height: 5vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 200px;
`;

const FormSection = styled.section`
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const AuthenticationPage = ({mode}) => {

    return (
        <AuthWrapper className='authWrapper'>
            <UserNav className='userNav'>
                <NavLink to='/welcome' className='logoBtn' />
            </UserNav>
            <FormSection>
                {mode === 'login' ? <LoginForm /> : <SignupForm />}
            </FormSection>
        </AuthWrapper>
    )
}

export default AuthenticationPage;
