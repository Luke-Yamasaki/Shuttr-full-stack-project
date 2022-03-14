import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import {logout} from '../../../store/session';
import * as imagesActions from '../../../store/images';
import greetings from './greetings/greetings';
import styles from './ProfileButton.module.css';
import styled from 'styled-components';

// const div = styled.div`
//   width: 300px;
//   height: 500px;
//   display: flex;
//   flex-direction: column;
//   margin-left: -300px;
//   margin-top: 5vh;
// `;

const UserGreetingBox = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const GreetingText = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0px;
`;

// const DataUsageBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 200px;
//   height: 100px;
//   border-top: 1px solid grey;
//   border-bottom: 1px solid grey;
// `;

function ProfileButton({user}) {
    const dispatch = useDispatch();
    const imagesObj = useSelector(state => state.imagesState.images);
    const imagesArr = Object.values(imagesObj);
    const [showMenu, setShowMenu] = useState(false);
    const [num, setNum] = useState(3)
    const [greeting, setGreeting] = useState({"language": "Spanish", "greeting": "Hola"})
    const [loaded, setLoaded] = useState(false);
    // const imagesCount = imagesArr.map(image => image.userId === user.id);
    // const imageNum = imagesCount.length

    const openMenu = () => {
        if (showMenu) return;
        const randomNum = Math.floor(Math.random() * 100);
        setNum(randomNum);
        setGreeting(greetings[randomNum])
        setShowMenu(true);
    };

    useEffect(() => {
      dispatch(imagesActions.getImages()).then(() => setLoaded(true));
    },[])

    useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
        setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);

      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const handleLogout = (e) => {
      e.preventDefault();
      if (user) {
        dispatch(logout());
      } else {
        return <Redirect to='/' />
      }
  };

    return loaded && (
      <div>
        <div className={styles.userButton} style={{backgroundImage: `url(${user.profileImageUrl})`}} onClick={openMenu}></div>
        {showMenu && (
          <div className={styles.menuWrapper}>
            <div className={styles.profileDiv}>
              <UserGreetingBox>
                <GreetingText>{greeting["greeting"]}, {user.username}!</GreetingText>
                <p style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.25)'}}>Now you know how to greet people in {greeting["language"]}.</p>
              </UserGreetingBox>
              <div style={{width: '220px', height: '1px', backgroundColor: 'white', marginLeft: '-25px', marginTop: '-10px'}}></div>
              <div className={styles.profileDropdown}>
                <p className={styles.itemText}>Username: {user.username}</p>
                <p className={styles.itemText}>Email: {user.email}</p>
                {/* <p className={styles.itemText}>Settings:<a href={`/users/${user.id}`} className={styles.settingsLink}>Change</a></p> */}
                <button type="button" className={styles.logoutBtn} onClick={handleLogout}>Log out</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default ProfileButton;
