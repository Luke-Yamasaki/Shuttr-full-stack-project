import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getOneImage } from "../../store/images";
import Navbar from "../../components/Navbar";
import styled from 'styled-components';

const SinglePageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: grey;
`

const SingleImagePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const [showEditForm, setShowEditForm] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const imageObj = useSelector(state => state.imagesState.images);
    const imageArr = Object.values(imageObj);

    useEffect(() => {
        dispatch(getOneImage(id)).then(() => setLoaded(true));
    },[id])

    if (!imageObj) {
        return null;
      }

    return loaded && (
        <SinglePageWrapper>
            <Navbar />
            <div style={{
                width: '100vw',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
                <div>Uploader Info
                    <img src={imageObj.imageUrl}></img>
                    <h2>User Icon</h2>
                    <h2>Username</h2>
                    <h2>First name Last name</h2>
                </div>
                <div>
                    <div>Comment
                        <h2>User Icon</h2>
                        <h2>Username</h2>
                        <h2>First name Last name</h2>
                        <h2>Comment</h2>
                        <h2>Edit</h2>
                        <h2>Delete</h2>
                    </div>
                </div>
            </div>

        </SinglePageWrapper>
    )
}

export default SingleImagePage;
