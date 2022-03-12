import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as sessionActions from '../../../store/session';
import * as imagesActions from '../../../store/images';
import greetings from './greetings/greetings';
import styles from './ProfileButton.module.css';
import styled from 'styled-components';

const DropDownBox = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-left: -300px;
  margin-top: 45px;
  background-color: green;
`;

const UserGreetingBox = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding-top: 10px;
`;

const GreetingText = styled.p`
  font-size: 18px;
  text-align: left;
  margin-left:10px;

`;

const DataUsageBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 200px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

function ProfileButton({user}) {
    const dispatch = useDispatch();
    const imagesObj = useSelector(state => state.imagesState.images);
    const imagesArr = Object.values(imagesObj);
    const imagesCount = imagesArr.map(image => image.userId === user.id).length;
    const [showMenu, setShowMenu] = useState(false);
    const [num, setNum] = useState(3)
    const [greeting, setGreeting] = useState({"language": "Spanish", "greeting": "Hola"})
    const [loaded, setLoaded] = useState(false);

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

    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
    };

    return loaded && (
      <>
        <button className={styles.userButton} style={{backgroundImage: `url(${user.profileImageUrl})`}} onClick={openMenu}>
        </button>
        {showMenu && (
          <DropDownBox>
            <UserGreetingBox>
              <GreetingText>{greeting["greeting"]}, {user.username}!</GreetingText>
              <p>Now you know how to greet people in {greeting["language"]}</p>
            </UserGreetingBox>
            <DataUsageBox>
                <img src={user.profileImageUrl} alt='dataUsage' style={{width: '80px', height: '80px', borderRadius: '100%'}}></img>
                <div>
                    <p>'Insert user image count of' 1,000 items</p>
                    <Link to='/upload'>Upload your images</Link>
                </div>
            </DataUsageBox>
            <ul className={styles.profileDropdown}>
              <li className={styles.profileItems}>Username:<p className={styles.itemText}>{user.username}</p></li>
              <li className={styles.profileItems}>Email:<p className={styles.itemText}>{user.email}</p></li>
              <li className={styles.profileItems}>Settings:<a href={`/users/${user.id}`} className={styles.settingsLink}>Change</a></li>
              <li className={styles.profileItems}>
                <button className={styles.logoutBtn} onClick={logout}>Log out</button>
              </li>
            </ul>
          </DropDownBox>
        )}
      </>
    );
  }

  export default ProfileButton;
