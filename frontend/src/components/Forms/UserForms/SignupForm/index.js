import React, { useState } from 'react';
import * as sessionActions from '../../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

import {FormWrapper, FormContent, Form} from '../index';


export const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
      <FormWrapper>
          <FormContent>
            <div></div>
            <h6>Log in to Shuttr</h6>
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

        // <form onSubmit={handleSubmit}>
        //   <ul>
        //     {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //   </ul>
        //   <label>
        //     Username or Email
        //     <input
        //       type="text"
        //       value={credential}
        //       onChange={(e) => setCredential(e.target.value)}
        //       required
        //     />
        //   </label>
        //   <label>
        //     Password
        //     <input
        //       type="password"
        //       value={password}
        //       onChange={(e) => setPassword(e.target.value)}
        //       required
        //     />
        //   </label>
        //   <label>
        //     Confirm password
        //     <input
        //       type="password"
        //       value={password}
        //       onChange={(e) => setPassword(e.target.value)}
        //       required
        //     />
        //   </label>
        //   <button type="submit">Log In</button>
        // </form>
    );
}

export default SignupForm;
