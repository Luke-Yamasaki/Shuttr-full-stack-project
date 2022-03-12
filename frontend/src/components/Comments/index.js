import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import * as commentActions from '../../store/comments';
import styles from './Comments.module.css';

const Comments = ({user, comments}) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState('');
    const [date, setDate] = useState('');
    // const [year, setYear] = useState(new Date().getUTCFullYear());
    // const [month, setMonth] = useState(new Date().getUTMonth() + 1);
    // const [day, setDay] = useState(new Date().getUTCDay())
    // let commentYear;
    // let commentMonth;
    // let commentDay;
    // let dateInfo;

    const handleSubmit = (e) => {
        e.preventDefault();

        const commentData = {
            userId: user.id,
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
        <div className={styles.wrapper}>
            {comments.map(comment => (
                <div key={comment.id} className={styles.commentBox}>
                    <img style={{width: '30px', height: '30px', borderRadius: '100%'}}src={user.profileImageUrl}></img>
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
    )
}

export default Comments;
