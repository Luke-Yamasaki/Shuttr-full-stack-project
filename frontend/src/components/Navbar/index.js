import React, {useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Searchbar from '../Searchbar';
import styles from './Navbar.module.css';
import ProfileButton from './ProfileButton';

const NavWrapper = styled.div`
    width: 100vw;
    height: 5vh;
    background-color: #212124;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavUl = styled.ul`
    min-height: 4vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoButton = styled.button`
    width: 100px;
    height: 33px;
`;

const AboutWrapper = styled.div`
    width: 150px;
    min-height: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const AboutPopup = styled.div`
    position: absolute;
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: grey;
    border-radium: 0.25rem;
`;

const Navbar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const userUrl = `/users/${sessionUser.id}`;
    const userImagesUrl = `/users/${sessionUser.id}/items`
    const [showAbout, setShowAbout] = useState(false);

    return(
        <NavWrapper>
            <NavUl>
                <LogoButton className={styles.logoBtn}>
                    <NavLink to='/login' className={styles.logoLink} />
                </LogoButton>
                <AboutWrapper>
                    <div className={styles.aboutBox} onMouseEnter={()=>setShowAbout(true)} onMouseLeave={()=>setShowAbout(false)}>
                    <NavLink to={userUrl} >You</NavLink>
                    </div>
                    {showAbout &&
                    <AboutPopup>
                        <NavLink to={userUrl} >About</NavLink>
                        <NavLink to={userImagesUrl}>Your Images</NavLink>
                    </AboutPopup>
                }
                </AboutWrapper>
                <div>discover</div>
                <div>search bar</div>
                <div>upload</div>
                <ProfileButton></ProfileButton>
            </NavUl>
        </NavWrapper>
    )
}

export default Navbar;
