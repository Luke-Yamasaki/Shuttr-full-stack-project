import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import styles from './ImageDetail.module.css';
import { deleteImage, getImages } from '../../../store/images';
import { getComments } from '../../../store/comments';
import Comments from '../../../components/Comments';

const ImageDetail = ({images, users}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObj = useSelector(state => state.imagesState.images);
    // const imagesArr = Object.values(imagesObj)
    const commentsObj = useSelector(state => state.commentsState.comments);
    const commentsArr = Object.values(commentsObj);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [deletedId, setDeletedId] = useState('');
    const [showComments, setShowComments] = useState(false);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null)

    // useEffect(() => {
    //     dispatch(getImages())
    // },[dispatch])

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
            setShowComments(true)
        }
    }

    const closeComments = async (e) => {
        e.preventDefault();
        const body = await document.querySelector('body');
        body.style.height = 'auto';
        body.style.overflowY = 'scroll';
        setShowComments(false);
    }

    return  (
        <>
            {images.map(image => (
                <div key={image.id} className={styles.commentWrapper}>
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
                    {showComments && (
                        <div className={styles.commentsPopup} onClick={closeComments}>
                                <div className={styles.commentsBox}>
                                    {commentsArr.map(comment =>
                                        <div key={comment.id} className={styles.commentContainer}>
                                            <img src={users[comment.userId].profileImageUrl} style={{width: '30px', height: '30px', borderRadius: '100%'}}></img>
                                            <div>
                                                <Link style={{color: 'blue'}}to={`/users/${comment.userId}`}>{users[comment.userId].firstName}{users[comment.userId].lastName}</Link>
                                                <p>{comment.content}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            <form>
                                <textarea></textarea>
                                <button type='submit'></button>
                            </form>
                        </div>
                )}
               </div>
            ))}
        </>
    )
}

export default ImageDetail;
