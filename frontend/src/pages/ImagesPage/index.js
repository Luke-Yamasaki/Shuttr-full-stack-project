import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './ImagesPage.module.css';
import Navbar from '../../components/Navbar/index';
import ImageDetail from './ImageDetail';
import styled from 'styled-components';
import { getImages } from '../../store/images';
import { getUsers } from '../../store/users';

const PageWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: space-between;
    background-color: rgba(0, 0, 0, 0.43);
    `;

const ImageWrapper = styled.div`
    width: 1500px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: grey;

`;

const ImagesPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activity, setActivity] = useState('All Activity');
    const sessionUser = useSelector((state) => state.session.user);
    const imagesObj = useSelector((state) => state.imagesState.images);
    const imagesArr = Object.values(imagesObj);
    const imagesArrCopy = [...imagesArr];
    const reversedImagesArr = imagesArrCopy.reverse();

    const usersObj = useSelector((state) => state.usersState.users);
    const usersArr = Object.values(usersObj);
    // const imagesList = images[0];
    // const imagesArr = [...imagesList]

    const dispatch = useDispatch();
    // const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        dispatch(getUsers())
    },[])

    useEffect(() => {
        dispatch(getImages()).then(() => setIsLoaded(true))
    },[dispatch]);

    const handleSorting = (e) => {
        e.preventDefault();
        const selectBox = document.getElementsByTagName('select')[0];
        const value = selectBox.options[selectBox.selectedIndex].value;
        setActivity(value);
    }

    if(!imagesArr) {
        return null;
    }

    return isLoaded && (
        <PageWrapper>
            <Navbar />
            <div style={{width: '100vw', height: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <div style={{width: '1500px'}}>
                    <h1 style={{color: 'white'}}>Explore</h1>
                    <select onChange={handleSorting} name='sorting' className={styles.selectActivity} onBlur={(e) => e.target.style.border = 'none'}>
                        <option value=''>--  Activity  --</option>
                        <option value='Oldest'>Oldest</option>
                        <option value='Newest'>Newest</option>
                    </select>
                </div>
                <ImageWrapper>
                    { activity === 'Newest' ? <ImageDetail images={reversedImagesArr} users={usersObj}/> : <ImageDetail images={imagesArr} users={usersObj}/>}
                </ImageWrapper>
            </div>
        </PageWrapper>
    )
};

export default ImagesPage;
