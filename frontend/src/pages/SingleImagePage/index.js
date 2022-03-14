import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams, useHistory} from 'react-router-dom';
import * as imageActions from "../../store/images";
import * as commentActions from '../../store/comments';
import * as usersActions from '../../store/users';
import Navbar from "../../components/Navbar";
import CommentsModal from '../../components/CommentsModal';
import Comments from '../../components/Comments';
import EditFormModal from '../../components/EditFormModal';
import styled from 'styled-components';
import styles from './SingleImagePage.module.css';

const SinglePageWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #212124;
    over-flow-y: scroll;
`

const SingleImagePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [showEditForm, setShowEditForm] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState('');

    const [selected, setSelected] = useState(null);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null)
    const [commentVal, setCommentVal] = useState('');
    const [commentErr, setCommentErr] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [editVal, setEditVal] = useState('')
    const [editErr, setEditErr] = useState([]);
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    const imageObj = useSelector(state => state.imagesState.images);
    const imageArr = Object.values(imageObj);

    const usersObj = useSelector(state => state.usersState.users);
    const usersArr = Object.values(usersObj);

    const commentsObj = useSelector(state => state.imagesState.comments);
    const commentsArr = Object.values(commentsObj);

    useEffect(() => {
        dispatch(usersActions.getUsers()).then(() => setLoaded(true));
    },[])

    // useEffect(() => {
    //     dispatch(imageActions.getOneImage(id));
    // },[id])

    // useEffect(() => {
    //     dispatch(imageActions.getOneImage(id));
    // },[dispatch])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(imageActions.deleteImage(Number(e.target.name))).then(() => dispatch(imageActions.getImages()))
    }

    const handleDeleteComment = async (e) => {
        e.preventDefault();
        setCommentVal('');
        const body = await document.querySelector('body');
        body.style.height = 'auto';
        body.style.overflowY = 'scroll';
        // setSelected(null);
        const response = await dispatch(commentActions.deleteComment(+e.target.name));
        if(response) {
            dispatch(commentActions.getComments(+selected))
        }
    }

    const handleEditComment = async (e) => {
        e.preventDefault();
        setEditItem(+e.target.name);
    }

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        setEditErr([]);
        setEditVal('')

        const commentData = {
            userId: sessionUser.id,
            imageId: selected,
            commentId: editItem,
            content: editVal
        }

        const response = await dispatch(commentActions.editComment(commentData))
            .catch(async (res) => {
                const data = await res.json();
                const errArr = [];

                if(data && data.errors) {
                    data.errors.map((error) => {
                        errArr.push(error)
                    })
                }
                setEditErr(errArr)
            })

            if(response) {
                dispatch(commentActions.getComments(+selected)).then(() => setEditItem(null))
            }
    }

    const handleEditCancel = (e) => {
        e.preventDefault();
        setEditItem(null);
    }




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
            <Navbar className={styles.navbarC} />
            <div style={{
                width: '100vw',
                height: 'auto',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'

            }}>

                <img src={imageObj.imageUrl} className={styles.image}></img>
                <div>
                    <div className={styles.uploaderInfo}>Uploader Info
                        <img src={usersObj[id]}></img>
                        <h2>Username</h2>
                        <h2>First name Last name</h2>
                    </div>
                    <div>
                        <h2>{+commentsArr.length}</h2>
                        <p>comments</p>
                        <h2>Uploaded on {new Date(imageObj.createdAt).toLocaleDateString()} </h2>
                    </div>
                </div>
                <div className={styles.commentsBox}>
                    {commentsArr.map(comment =>
                        <div key={comment.id} className={styles.commentContainer}>
                                {comment.id === editItem && comment.userId === sessionUser.id ?
                                <form onSubmit={handleSubmitEdit} className={styles.form}>
                                    {editErr.length >= 1 && editErr.map(error => <div className={styles.err}>{error}</div>)}
                                    <textarea maxLength={300} placeholder='Edit comment...' value={editVal} className={styles.textArea} onChange={(e) => setEditVal(e.target.value)}></textarea>
                                    <div className={styles.btnWrapper}>
                                        <button type='button' className={styles.cancelBtn} onClick={handleEditCancel}>Cancel</button>
                                        <button name={comment.id} type='submit' className={styles.submitBtn} onClick={handleSubmitEdit}>Add comment</button>
                                    </div>
                                </form>
                                :
                                <div className={styles.commentUserInfo}>
                                    <img src={usersObj[comment.userId].profileImageUrl} style={{width: '40px', height: '40px', borderRadius: '100%'}}></img>
                                    <div className={styles.contentBox}>
                                        <Link style={{color: '#006dac'}}to={`/users/${comment.userId}`}>{usersObj[comment.userId].firstName} {usersObj[comment.userId].lastName}</Link>
                                        <p className={styles.commentContent}>{comment.content}</p>
                                    </div>
                                </div>
                                }
                            {comment.userId === sessionUser.id &&
                                <div className={styles.btnWrap}>
                                    <button className={`${styles.delBtn} ${styles.commentEdit}`} type='button' name={comment.id} onClick={handleEditComment}>Edit</button>
                                    <button className={`${styles.delBtn} ${styles.commentDel}`} type='button' name={comment.id} onClick={handleDeleteComment}>Delete</button>
                                </div>
                            }
                        </div>
                    )}
                </div>
                {/* <div style={{width: '450px', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'white'}}>
                    <img src={sessionUser.profileImageUrl} style={{height: '30px', width: '30px', borderRadius: '100%'}}></img>
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder='Add a comment' style={{width: '385px', height: '85px', padding: 'none'}} />
                        <button type='submit'>Comment</button>
                    </form>
                </div> */}
            </div>
        </SinglePageWrapper>
    )
}

export default SingleImagePage;
