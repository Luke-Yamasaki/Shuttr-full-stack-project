import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './ImagesPage.module.css';
import Navbar from '../../components/Navbar/index';
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
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
`;

const ImagesPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const images = useSelector((state) => state.images.images)
    const dispatch = useDispatch();
    // const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

    if(!images) {
        return null;
    }

    return (
        <PageWrapper>
            <Navbar />
            <div style={{width: '100vw', height: '95vh', display: 'flex', flexDirection: 'column'}}>
                <h1 style={{marginTop: '50px'}}>Explore</h1>
                <ImageWrapper>
                    {images.map(image => {
                        return(
                            <div style={{width: '400px', height: '300px'}}>
                                <img src={images.imageUrl}></img>
                                <div>
                                    <div>
                                        <Link to='/images/:id' >{image}</Link>
                                        <Link to='/users/:id'>by {image.userId} </Link>
                                    </div>
                                    {image.userId === sessionUser.id ?
                                    <div>
                                        <button>Comments</button>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                    : <button>Comments</button>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </ImageWrapper>
            </div>
            {/* <img src={sessionUser.profileImageUrl} style={{width: '1000px', height: '750px'}}></img> */}
        </PageWrapper>
    )
};

export default ImagesPage;
