import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './ImagesPage.module.css';
import Navbar from '../../components/Navbar/index';
import ImageDetail from './ImageDetail';
import styled from 'styled-components';

import { getImages } from '../../store/images';

const PageWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: space-between;
`;

const ImageWrapper = styled.div`
    width: 1500px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
`;

const ImagesPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const imagesObj = useSelector((state) => state.imagesState);
    const images = Object.values(imagesObj);
    // const imagesList = images[0];
    // const imagesArr = [...imagesList]

    const dispatch = useDispatch();
    // const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        dispatch(getImages()).then(() => setIsLoaded(true))
    },[dispatch]);

    if(!images) {
        return null;
    }

    return isLoaded && (
        <PageWrapper>
            <Navbar />
            <div style={{width: '100vw', height: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{marginTop: '50px'}}>Explore</h1>
                <ImageWrapper>
                    <ImageDetail images={images[0]} />
                </ImageWrapper>
            </div>
        </PageWrapper>
    )
};

export default ImagesPage;
