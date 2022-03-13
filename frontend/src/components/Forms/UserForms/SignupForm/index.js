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
  width: 295px;
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('Must be older than 12');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstNameErrors, setfirstNameErrors] = useState([]);
  const [lastNameErrors, setLastNameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [ageErrors, setAgeErrors] = useState([]);
  const [pwrdErrors, setPwrdErrors] = useState([]);
  const [confirmPwrdErrors, setConfirmPwrdErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
      e.preventDefault();
      setfirstNameErrors([]);
      setLastNameErrors([]);
      setEmailErrors([]);
      setAgeErrors([]);
      setPwrdErrors([]);
      setConfirmPwrdErrors([]);

      return dispatch(sessionActions.signup({ firstName, lastName, age, email, password, confirmPassword }))
        .catch(async (res) => {
          const data = await res.json();
          const firstErrorArr = [];
          const lastErrorArr = [];
          const ageErrorArr = []
          const emailErrorArr = [];
          const passwordErrorArr = [];
          const confirmPasswordErrorArr = [];

          if (data && data.errors) {
            data.errors.map((error) => {
              if(error.toLowerCase().includes("first name")) {
                return firstErrorArr.push(error)
              }
              else if(error.toLowerCase().includes("last name")) {
                return lastErrorArr.push(error)
              }
              else if(error.toLowerCase().includes("valid age")) {
                return ageErrorArr.push(error)
              }
              else if(error.toLowerCase().includes("email")) {
                return emailErrorArr.push(error)
              }
              else if(error.toLowerCase().includes("provide a password")) {
                return passwordErrorArr.push(error)
              }
              else if(error.toLowerCase().includes("confirm") || error.toLowerCase().includes("match")) {
                return confirmPasswordErrorArr.push(error)
              }
              else return null;
        })
        }
        setfirstNameErrors(firstErrorArr);
        setLastNameErrors(lastErrorArr);
        setAgeErrors(ageErrorArr);
        setEmailErrors(emailErrorArr)
        setPwrdErrors(passwordErrorArr);
        setConfirmPwrdErrors(confirmPasswordErrorArr);
        });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    const email = "demo@user.com";
    const password = "password123!"
    return dispatch(sessionActions.login({email, password}))
      .catch(async (res) => {
        const data = await res.json();
      })
  }


  const firstInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[0];
    const inputLabel = document.getElementsByTagName('label')[0];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[0];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const firstInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[0];
    const inputLabel = document.getElementsByTagName('label')[0];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[0];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }

  const lastInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[1];
    const inputLabel = document.getElementsByTagName('label')[1];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[1];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const lastInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[1];
    const inputLabel = document.getElementsByTagName('label')[1];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[1];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }

  const ageInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[2];
    const inputLabel = document.getElementsByTagName('label')[2];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[2];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const ageInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[2];
    const inputLabel = document.getElementsByTagName('label')[2];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[2];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }

  const emailInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[3];
    const inputLabel = document.getElementsByTagName('label')[3];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[3];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const emailInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[3];
    const inputLabel = document.getElementsByTagName('label')[3];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[3];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }

  const passwordInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[4];
    const inputLabel = document.getElementsByTagName('label')[4];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[4];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const passwordInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[4];
    const inputLabel = document.getElementsByTagName('label')[4];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[4];
    inputDiv.style.border = '1px solid grey'
    inputField.style.height = '15px';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#212124';
    inputLabel.style.borderColor = 'grey';
  }

  const confirmPasswordInputClick = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[5];
    const inputLabel = document.getElementsByTagName('label')[5];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[5];
    inputDiv.style.border = '1px solid #128fdc'
    inputField.style.height = '30px';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#128fdc';
    inputLabel.style.borderColor = '#128fdc';
  }

  const confirmPasswordInputBlur = (e) => {
    const inputDiv = document.getElementsByClassName('input-container')[5];
    const inputLabel = document.getElementsByTagName('label')[5];
    const inputField = document.getElementsByClassName('sc-eCImPb bdKjVM')[5];
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
              {firstNameErrors && (
                <ErrorUl>
                  {firstNameErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>First name</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onClick={firstInputClick}
                  onBlur={firstInputBlur}
                ></FormInput>
              </div>
              {lastNameErrors && (
                <ErrorUl>
                  {lastNameErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>Last name</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onClick={lastInputClick}
                  onBlur={lastInputBlur}
                ></FormInput>
              </div>
              {ageErrors && (
                <ErrorUl>
                  {ageErrors.map(error =>
                  <ErrorLi key={error} style={{listStyle: 'none', color: 'red'}}>{error}</ErrorLi>)
                  }
                </ErrorUl>
              )
              }
              <div className='input-container'>
                <label className='input-label'>Your age</label>
                <FormInput
                  className='sc-eCImPb bdKjVM user-input-field'
                  type='number'
                  min='12'
                  max='130'
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  onClick={ageInputClick}
                  onBlur={ageInputBlur}
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
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={emailInputClick}
                  onBlur={emailInputBlur}
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
                  onClick={passwordInputClick}
                  onBlur={passwordInputBlur}
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
                  onClick={confirmPasswordInputClick}
                  onBlur={confirmPasswordInputBlur}
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
