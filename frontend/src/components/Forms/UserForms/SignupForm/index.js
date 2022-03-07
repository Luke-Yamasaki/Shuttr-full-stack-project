import React, { useState } from 'react';
import * as sessionActions from '../../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import {FormWrapper, FormContent, Form} from '../index';
import './SignupForm.css';

const FormLogo = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
`;

const FormInput = styled.input`
  background-color: transparent;
  border: none;
  color: #212124;
  cursor: text;
  width: 302px;
`;

const ErrorUl = styled.ul`
  width: 305px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding-left: 0px;
  margin-bottom: 10px;
`;

const ErrorLi = styled.li`
  width: 305px;
  font-family: sans-serif;
  font-size: 12px;
`;

const FormButton = styled.button`
  width: 195px;
  height: 40px;
  background-color: #0063DC;
  background-color: #128fdc;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 0.25rem;
`

const DemoButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #FF0084;
  background-color: #d65fab;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 0.25rem;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameErrors, setUsernameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [pwrdErrors, setPwrdErrors] = useState([]);
  const [confirmPwrdErrors, setConfirmPwrdErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== confirmPassword) return setConfirmPwrdErrors('Passwords do not match.')

      setUsernameErrors([]);
      setEmailErrors([]);
      setPwrdErrors([]);

      return dispatch(sessionActions.signup({ username, email, password }))
        .catch(async (res) => {
          const data = await res.json();
          const userErrors = [];
          const emailErrors = [];
          const userPwrdErrors = [];
          if (data && data.errors) {
            data.errors.map((error) => {
              if(error.toLowerCase().includes("username")) {
                return userErrors.push(error)
              } else if(error.toLowerCase().includes("email")) {
                return emailErrors.push(error)
              }
              else if(error.toLowerCase().includes("password")) {
                return userPwrdErrors.push(error)
              } else return null;
        })
        }
        setUsernameErrors(userErrors);
        setEmailErrors(emailErrors)
        setPwrdErrors(userPwrdErrors);
        });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    const credential = "Demo-lition";
    const password = "password"
    return dispatch(sessionActions.login({credential, password}))
      .catch(async (res) => {
        const data = await res.json();
      })
  }


  const userInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[0];
    const inputLabel = document.getElementsByTagName('label')[0];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[0];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const userInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[0];
    const inputLabel = document.getElementsByTagName('label')[0];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[0];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }
  const pwrdInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[1];
    const inputLabel = document.getElementsByTagName('label')[1];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[1];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const pwrdInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[1];
    const inputLabel = document.getElementsByTagName('label')[1];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[1];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }

  return (
      <FormWrapper className='sgn-form-wrapper'>
        <FormContent>
          <div className='logo-div'>
            <FormLogo className='sgn-form-logo'/>
          </div>
          <h6 className='sgn-text'>Sign up for Shuttr</h6>
          <Form onSubmit={handleSubmit}>
            <div className='input-wrapper'>
              {usernameErrors && (
                <ErrorUl>
                  {usernameErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>Username</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onClick={userInputClick}
                  onBlur={userInputBlur}
                ></FormInput>
              </div>
              {emailErrors && (
                <ErrorUl>
                  {emailErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>Email</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={userInputClick}
                  onBlur={userInputBlur}
                ></FormInput>
              </div>
              {pwrdErrors && (
                <ErrorUl>
                  {pwrdErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>Password</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onClick={pwrdInputClick}
                  onBlur={pwrdInputBlur}
                ></FormInput>
              </div>
              {confirmPwrdErrors && (
                <ErrorUl>
                  {confirmPwrdErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>Confirm password</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onClick={pwrdInputClick}
                  onBlur={pwrdInputBlur}
                ></FormInput>
              </div>
            </div>
            <div className='user-button-wrapper'>
              <DemoButton className='submit-btn' onClick={handleDemo}>Demo user</DemoButton>
              <FormButton className='submit-btn'>Sign up</FormButton>
            </div>
          </Form>
          <div className='question-text'>
            Already a Shuttr member?
            <Link to='/login' className='login-link'>Log in here.</Link>
          </div>
        </FormContent>
      </FormWrapper>
  );
}

export default LoginForm;
