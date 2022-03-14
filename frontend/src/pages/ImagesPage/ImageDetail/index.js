import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useHistory, Redirect} from 'react-router-dom';
import styles from './ImageDetail.module.css';
import { deleteImage, getImages  } from '../../../store/images';
import { createComment, deleteComment, editComment, getComments} from '../../../store/comments';
import Comments from '../../../components/Comments';

const ImageDetail = ({images, users}) => {
    // const usersObj = users;
    // const imagesArr = images;
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObj = useSelector(state => state.imagesState.images);
    const imagesArr = Object.values(imagesObj)
    const commentsObj = useSelector(state => state.commentsState.comments);
    const commentsArr = Object.values(commentsObj);
    const imageComment = useSelector(state => state.imagesState.comments);
    const imageCommentArr = Object.values(imageComment)
    // const usersObj = useSelector(state => state.commentsState.comments);
    // const usersArr = Object.values(commentsObj);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [deletedId, setDeletedId] = useState('');
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

    // useEffect(() => {
    //     dispatch(getImages());
    // }, [])

    // useEffect(() => {
    //     if(selected) {
    //         dispatch(getComments(+selected))
    //     }
    // },[selected])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteImage(Number(e.target.name))).then(() => dispatch(getImages()))
    }

    const handleComments = async (e) => {
        e.preventDefault();
        const response = await dispatch(getComments(Number(e.target.name)));
        if(response.ok) {
            setX(e.clientX);
            setY(e.clientY);
            const body = await document.querySelector('body');
            body.style.width = '100vw';
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';
            setSelected(+e.target.name)
        }
    }

    const closeComments = async (e) => {
        e.preventDefault();
        setCommentVal('');
        const body = await document.querySelector('body');
        body.style.height = 'auto';
        body.style.overflowY = 'scroll';
        setSelected(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCommentErr([]);
        setCommentVal('')

        const commentData = {
            userId: sessionUser.id,
            imageId: selected,
            content: commentVal
        }

        const response = await dispatch(createComment(commentData))
            .catch(async (res) => {
                const data = await res.json();
                const errArr = [];

                if(data && data.errors) {
                    data.errors.map((error) => {
                        errArr.push(error)
                    })
                }
                setCommentErr(errArr)
            })

            if(response.ok) {
                dispatch(getComments(+selected))
            }
    }

    const handleDeleteComment = async (e) => {
        e.preventDefault();
        setCommentVal('');
        const body = await document.querySelector('body');
        body.style.height = 'auto';
        body.style.overflowY = 'scroll';
        setSelected(null);
        dispatch(deleteComment(+e.target.name)).then(() => dispatch(getComments(+e.target.name)))
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

        const response = await dispatch(editComment(commentData))
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
                dispatch(getComments(+selected)).then(() => setEditItem(null))
            }
    }

    const handleEditCancel = (e) => {
        e.preventDefault();
        setEditItem(null);
    }

    return  (
        <>
            {imagesArr.map(image => (
                <div key={image.id} style={{zIndex: `${2000 - image.id}`}}className={styles.commentWrapper}>
                    <div key={image.id} style={{width: '500px', height: '300px', backgroundColor: 'rgba(0, 0, 0, 0.75)', borderRadius: '0.25rem', marginBottom: '5px'}}>
                        <div style={{backgroundImage: `url(${image.imageUrl})`}} className={styles.image}>
                            <div className={styles.infoDiv} onMouseOver={(e) => e.target.style.opacity = '100%' } onMouseLeave={(e) => e.target.style.opacity = '0%' }>
                                <Link className={styles.imageInfo} to={`/images/${image.id}`} key={image.id}>Title: {image.title}</Link>
                                <Link className={styles.imageInfo} to={`/users/${image.userId}`}>By: {users[image.userId].firstName} {users[image.userId].lastName} </Link>
                                {image.userId === sessionUser.id ?
                                    <div className={styles.buttonWrapper}>
                                        <button type='button' className={styles.comments} name={image.imageId} onClick={handleComments}>Comments</button>
                                        <div className={styles.btnDiv}>
                                            <Link className={styles.editLink} to={`/images/${image.id}`} >Edit</Link>
                                            <button className={styles.delBtn} name={image.id} onClick={(e) => handleDelete(e)}>Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <button type='button' className={styles.comments} name={image.id} onClick={handleComments}>Comments</button>
                                }
                            </div>
                        </div>
                    </div>
                    {selected && image.id === selected &&
                        <div className={styles.commentsPopup}>
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
                                            <>
                                                <img src={users[comment.userId].profileImageUrl} style={{width: '40px', height: '40px', borderRadius: '100%'}}></img>
                                                <div className={styles.contentBox}>
                                                    <Link style={{color: '#006dac'}}to={`/users/${comment.userId}`}>{users[comment.userId].firstName} {users[comment.userId].lastName}</Link>
                                                    <p className={styles.commentContent}>{comment.content}</p>
                                                </div>
                                            </>
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
                            <form onSubmit={handleSubmit} className={styles.form}>
                                {commentErr.length >= 1 && commentErr.map(error => <div className={styles.err}>{error}</div>)}
                                <textarea maxLength={300} placeholder='Post a comment...' value={commentVal} className={styles.textArea} onChange={(e) => setCommentVal(e.target.value)}></textarea>
                                <div className={styles.btnWrapper}>
                                    <button type='button' className={styles.cancelBtn} onClick={closeComments}>Cancel</button>
                                    <button name={image.id} type='submit' className={styles.submitBtn}>Add comment</button>
                                </div>
                            </form>
                        </div>
                    }
               </div>
            ))}
        </>
    )
}

export default ImageDetail;
