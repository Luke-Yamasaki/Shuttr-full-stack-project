import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../../store/session';
import greetings from './greetings/greetings';
import styles from './ProfileButton.module.css';
import styled from 'styled-components';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const profilePic = sessionUser.profileImageUrl;
    const [showMenu, setShowMenu] = useState(false);
    const [num, setNum] = useState(3)
    const [greeting, setGreeting] = useState({"language": "Spanish", "greeting": "Hola"})

    const openMenu = () => {
        if (showMenu) return;
        const randomNum = Math.floor(Math.random() * 100);
        setNum(randomNum);
        const greeting = greetings[num];
        setGreeting(greeting)
        setShowMenu(true);
    };

    useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
        setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);

      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
    };

    return (
      <>
        <button className={styles.userButton} onClick={openMenu}>
        </button>
        {showMenu && (
            <div>
                <div>
                   <h2>{greeting["greeting"]}, {sessionUser.username}</h2>
                    <p>Now you know how to greet people in {greeting["language"]}</p>
                </div>
                <div>
                    <div></div>
                    <div>
                        <p>'Insert user image count of' 1,000 items</p>
                        <Link to='/upload'>Upload your images</Link>
                    </div>
                </div>

                <ul className={styles.profileDropdown}>
                    <li className={styles.profileItems}>Email:<p className="item-text">{sessionUser.email}</p></li>
                    <li className={styles.profileItems}>Settings:<a href={`/users/${sessionUser.id}`} className="settings-link">Change</a></li>
                </ul>
            </div>

        )}
      </>
    );
  }

  export default ProfileButton;
