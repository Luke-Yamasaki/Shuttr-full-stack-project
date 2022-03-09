import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../../store/session';
import styles from './ProfileButton.module.css';
import styled from 'styled-components';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
      if (showMenu) return;
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
        <button style={{backgroundImage: `${sessionUser.profileImageUrl}`}}className="user-button" onClick={openMenu}>
        </button>
        {showMenu && (
            <div>
                <div>
                   <h2>{prop.greeting}, {sessionUser.username}</h2>
                    <p>Now you know how to greet people in {prop.language}</p>
                </div>
                <div>
                    <div></div>
                    <div>
                        <p>{imageCount} of 1,000 items</p>
                        <Link to='/upload'>Upload your images</Link>
                    </div>
                </div>

                <ul className="profile-dropdown">
            <li className="profile-items">Username:<p className="item-text">{sessionUser.username}</p></li>
            <li className="profile-items">Email:<p className="item-text">{sessionUser.email}</p></li>
            <li className="profile-items">Settings:<a href={`/users/${sessionUser.id}`} className="settings-link">Change</a></li>
          </ul>
            </div>

        )}
      </>
    );
  }

  export default ProfileButton;
