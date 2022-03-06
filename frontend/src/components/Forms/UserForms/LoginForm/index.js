import React, { useState } from 'react';
import * as sessionActions from '../../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import {FormWrapper, FormContent, Form} from '../index';
import './LoginForm.css';

const FormLogo = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
`;

const FormInput = styled.input`
background-color: transparent;
color: #212124;
cursor: text;
width: 302px;
height: 55px;
border-radius: 0.25rem;
font-size: 16px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
      <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    const handleClick = (e) => {
      e.preventDefault();
      setErrors([]);

      return dispatch(sessionActions.login({ credential, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
  }

    return (
        <FormWrapper className='lgn-form-wrapper'>
          <FormContent>
            <div className='logo-div'>
              <FormLogo className='lgn-form-logo'/>
            </div>
            <h6 className='login-text'>Log in to Shuttr</h6>
            <Form onSubmit={handleSubmit}>
              <div className='input-wrapper'>
                <label>Username or email</label>
                <FormInput value={credential} onChange={(e) => setCredential(e.target.value)}></FormInput>
              </div>
              <button onClick={handleClick}>Next</button>
            </Form>
            <div className='question-text'>
              Not a Shuttr member?
              <Link to='/signup' className='signup-link'>Sign up here.</Link>
            </div>
          </FormContent>
        </FormWrapper>
    );
}

export default LoginForm;
