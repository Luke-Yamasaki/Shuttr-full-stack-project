import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getOneImage } from "../../store/images";
import * as commentActions from '../../store/comments'
import Navbar from "../../components/Navbar";
import Comments from '../../components/Comments';
import EditFormModal from '../../components/EditFormModal';
import styled from 'styled-components';
import styles from './SingleImagePage.module.css';

const SinglePageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #212124;
    over-flow: hidden;
`

const SingleImagePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [showEditForm, setShowEditForm] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState('');

    const sessionUser = useSelector((state) => state.session.user);
    const imageObj = useSelector(state => state.imagesState.images);
    const commentsObj = useSelector(state => state.imagesState.comments);
    const commentsArr = Object.values(commentsObj);
    const imageArr = Object.values(imageObj);

    useEffect(() => {
        dispatch(getOneImage(id)).then(() =>setLoaded(true));
    },[id])

    if (!imageObj) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const commentData = {
            userId: sessionUser.id,
            content
        };

        return dispatch(commentActions.createComment(commentData)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            }
        );
    };


    return loaded && (
        <SinglePageWrapper>
            <Navbar />
            <div style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <img src={imageObj.imageUrl} className={styles.image}></img>
                <div>
                    <div className={styles.uploaderInfo}>Uploader Info
                        <h2>User Icon</h2>
                        <h2>Username</h2>
                        <h2>First name Last name</h2>
                    </div>
                    <div>
                        <h2>{+commentsArr.length}</h2>
                        <p>comments</p>
                        <h2>Uploaded on {new Date(imageObj.createdAt).toLocaleDateString()} </h2>
                    </div>
                </div>
                {commentsArr.map(comment => (
                    <Comments key={comment.id} user={sessionUser} comments={commentsArr}/>
                ))}
                <div style={{width: '450px', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'white'}}>
                    <img src={sessionUser.profileImageUrl} style={{height: '30px', width: '30px', borderRadius: '100%'}}></img>
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder='Add a comment' style={{width: '385px', height: '85px', padding: 'none'}} />
                        <button type='submit'>Comment</button>
                    </form>
                </div>
            </div>
        </SinglePageWrapper>
    )
}

export default SingleImagePage;
