import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';
import { getImages } from '../../store/images';
import { getUsers } from '../../store/users';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import LoginForm from '../../components/Forms/UserForms/LoginForm';
import SignupForm from '../../components/Forms/UserForms/SignupForm';
import Searchbar from '../../components/Searchbar';
import './WelcomePage.css';

const WelcomeWrapper= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const WelcomeSection = styled.section`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    font-family: sans-serif;
    overflow: hidden;
    background-color: black;
`;

const WelcomeContent = styled.section`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: sans-serif;
`;

const WelcomeNav = styled.nav`
    width: 100vw;
    height: 5vh;
    background-color: #212124;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const LogoButton = styled.button`
    width: 100px;
    height: 33px;
`;


const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 5vh;
    background-color: black;
    justify-content: space-around;
    align-items: center;
`

// const randomTenImages = {
//     0: {title: imageUrl: "https://images.unsplash.com/photo-1646206346896-14367dee001b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Njc4ODA5Mg&ixlib=rb-1.2.1&q=80&w=300", user: {
//         firstName: "Carter",
//         lastName: "Smith"
//       },},
//     1: {imageUrl: imageUrl, user: user},
//     2: {imageUrl: imageUrl, user: user},
//     3: {imageUrl: imageUrl, user: user},
//     4: {imageUrl: imageUrl, user: user},
//     5: {imageUrl: imageUrl, user: user},
//     6: {imageUrl: imageUrl, user: user},
//     7: {imageUrl: imageUrl, user: user},
//     8: {imageUrl: imageUrl, user: user},
//     9: {imageUrl: imageUrl, user: user},
//     10: {imageUrl: imageUrl, user: user}
// }

const WelcomePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObj = useSelector(state => state.imagesState.images);
    const imagesArr = Object.values(imagesObj);
    const usersObj = useSelector(state => state.usersState.users);
    const usersArr = Object.values(usersObj);
    const [loaded, setLoaded] = useState(false);
    const [randomImages, setRandomImages] = useState('');

    useEffect(() => {
        dispatch(getImages()).then(() => dispatch(getUsers())).then(() => setLoaded(true));
    }, [])

    const newImage = () => {
        return "https://picsum.photos/400/600"
    }

    if (sessionUser) return (
      <Redirect to="/" />
    )

    return loaded && (
        <WelcomeWrapper className='wlc-background'>
            <Navbar/>
            <WelcomeSection>
                <WelcomeContent className='animationImg'>
                    <div style={{height: '300px'}} />
                    <h1 style={{fontSize: '50px', color: 'white', textShadow: '1px 1px 5px black'}}>Find your inspiration.</h1>
                    <h3 style={{fontSize: '18px', color: 'white', marginBottom: '50px', textShadow: '1px 1px 5px black'}}>Join the Shuttr community, home to hndreds of high resolution photos.</h3>
                    <Link className='wlc-start-btn' to='/signup'>
                        Start for free
                    </Link>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', marginTop: '300px' }}>
                        <h5 className='wlc-photo-title'>{imagesObj[Math.floor(Math.random() * 100)].title}</h5>
                        <h5 className='wlc-user-info'>by {usersObj[Math.floor(Math.random() * 100)].firstName} {usersObj[Math.floor(Math.random() * 100)].lastName}</h5>
                    </div>
                </WelcomeContent>
            </WelcomeSection>
            <Footer>
                {/* <Link className='wlc-footer-text' to='/about'>About</Link>
                <Link className='wlc-footer-text' to='/services/designer'>Designers</Link>
                <Link className='wlc-footer-text' to='/services/developer'>Developers</Link> */}
                <div style={{width: '70vw'}}/>
                <div style={{width: '10vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                     <a href='https://github.com/Luke-Yamasaki/Shuttr-full-stack-project' className='wlc-footer-text'>GitHub</a>
                    <a href='https://www.linkedin.com/in/lukeyamasaki/' className='wlc-footer-text'>LinkedIn</a>
                </div>
                {/* <a href='https://www.behance.net/lukeyamasac140' className='wlc-footer-text'>Behance</a> */}
            </Footer>
        </WelcomeWrapper>
    );
}

export default WelcomePage;


// const randImages = () => {
//     const randomImagesArr = [];
//     let count = 0;
//     while(count < 100) {
//         randomImagesArr.push('hello')
//     };
//     setRandomImages(randomImagesArr);
// };
