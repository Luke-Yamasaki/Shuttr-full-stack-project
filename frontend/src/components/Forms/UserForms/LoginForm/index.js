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
            <FormLogo className='lgn-form-logo'/>
            <h6 className='login-text'>Log in to Shuttr</h6>
            <Form onSubmit={handleSubmit}>
              <input placeholder='Email address' value={credential} onChange={(e) => setCredential(e.target.value)}></input>
              <button onClick={handleClick}>Next</button>
            </Form>
            <div>
              <p>Not a Shuttr member?</p>
              <Link to='/signup'>Sign up here.</Link>
            </div>
          </FormContent>
        </FormWrapper>
    );
}

export default LoginForm;
