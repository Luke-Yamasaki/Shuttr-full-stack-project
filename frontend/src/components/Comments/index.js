import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import * as commentActions from '../../store/comments';
import styles from './Comments.module.css';


const Comments = ({imageId, users, comments}) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState('');
    const [loaded, setLoaded] = useState(false)
    const sessionUser = useSelector(state => state.session.user);
    // const [date, setDate] = useState('');
    // const [year, setYear] = useState(new Date().getUTCFullYear());
    // const [month, setMonth] = useState(new Date().getUTMonth() + 1);
    // const [day, setDay] = useState(new Date().getUTCDay())
    // let commentYear;
    // let commentMonth;
    // let commentDay;
    // let dateInfo;


    // const sortData = () => {
    //     const userCommentsArr = [];
    //     comments.map((comment) => {
    //         const info = {user: users[comment.userId], comment: comment}
    //         userCommentsArr.push(info)
    //     })
    //     return userCommentsArr;
    // }

    const openComments = () => {
        if (showComments) return;
        setShowComments(true);
    };

    useEffect(() => {
        if (!showComments) return;

        const closeComments = () => {
          setShowComments(false);
        };

        document.addEventListener('click', closeComments);

        return () => document.removeEventListener("click", closeComments);
      }, [showComments]);


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

    return (
        <div>
            <button name={imageId} className={styles.comments} onClick={setShowComments(true)}>Comments</button>
            {showComments &&
                <div className={styles.wrapper}>
                    {comments.map(comment => (
                        <div key={comment.id} className={styles.commentBox}>
                            <img style={{width: '30px', height: '30px', borderRadius: '100%'}}src={users[comment.userId].profileImageUrl}></img>
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
            }
        </div>
    )
}

export default Comments;
