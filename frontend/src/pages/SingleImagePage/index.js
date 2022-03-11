import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getOneImage } from "../../store/images";
import Navbar from "../../components/Navbar";
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

    const sessionUser = useSelector((state) => state.session.user);
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
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <img src={imageObj.imageUrl} className={styles.image}></img>
                <EditFormModal imageObj={imageObj}/>
                <div>
                    <div className={styles.uploaderInfo}>Uploader Info
                        <h2>User Icon</h2>
                        <h2>Username</h2>
                        <h2>First name Last name</h2>
                    </div>
                    <div>
                        <h2>Comments count</h2>
                        <h2>Taken on image create ad date.</h2>
                    </div>
                </div>
                <div>
                    <div>Comments
                        <div>
                            <img></img>
                            <div>
                                <div>
                                    <Link to={`/users`} ></Link>
                                    <h2>created at</h2>
                                </div>
                                <div>
                                    <h2>Comment content</h2>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '450px', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'white'}}>
                            <img src={sessionUser.profileImageUrl} style={{height: '30px', width: '30px', borderRadius: '100%'}}></img>
                            <form>
                                <textarea placeholder='Add a comment' style={{width: '385px', height: '85px', padding: 'none'}}>
                                </textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </SinglePageWrapper>
    )
}

export default SingleImagePage;
