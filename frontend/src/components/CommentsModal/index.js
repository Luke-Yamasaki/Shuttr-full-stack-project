import React, {useState, useEffect} from 'react';
import { Modal } from '../../context/Modal'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import * as commentActions from '../../store/comments';
import * as usersActions from '../../store/users';
import styles from './Comments.module.css';
import { createPortal } from 'react-dom';

const CommentsModal = ({imageId, comments}) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState('');
    const [loaded, setLoaded] = useState(false)
    const sessionUser = useSelector(state => state.session.user);
    const commentsObj = useSelector(state => state.commentsState.comments);
    const commentsArr = Object.values(commentsObj);
    const usersObj = useSelector(state => state.usersState.users);
    // const [date, setDate] = useState('');
    // const [year, setYear] = useState(new Date().getUTCFullYear());
    // const [month, setMonth] = useState(new Date().getUTMonth() + 1);
    // const [day, setDay] = useState(new Date().getUTCDay())
    // let commentYear;
    // let commentMonth;
    // let commentDay;
    // let dateInfo;

    useEffect(() => {
        dispatch(usersActions.getUsers()).then(() => setLoaded(true))
    },[dispatch])

    // const sortData = () => {
    //     const userCommentsArr = [];
    //     comments.map((comment) => {
    //         const info = {user: users[comment.userId], comment: comment}
    //         userCommentsArr.push(info)
    //     })
    //     return userCommentsArr;
    // }


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
        <>
            <button name={imageId} className={styles.comments} onClick={setShowModal(true)}>Comments</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className={styles.wrapper}>
                        {comments.map(comment => (
                            <div key={comment.id} className={styles.commentBox}>
                                <img style={{width: '30px', height: '30px', borderRadius: '100%'}}src={usersObj[comment.id].profileImageUrl}></img>
                                <div>
                                    <div className={styles.userInfo}>
                                        <Link to={`/users/${comment.userId}`} >{comment.userId}</Link>
                                        <h6>Submitted on: {new Date(comment.createdAt).toLocaleDateString()}</h6>
                                    </div>
                                </div>
                                <div>
                                    <h2>{comment.content}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </Modal>
            )}
        </>
    )
}

export default CommentsModal;
