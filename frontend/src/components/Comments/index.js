import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import * as commentActions from '../../store/comments';
import styles from './Comments.module.css';

const Comments = ({user, comments}) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() => {


    },[content])

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
                <div className={styles.commentBox}>
                    <img style={{width: '30px', height: '30px', borderRadius: '100%'}}src={user.profileImageUrl}></img>
                    <div>
                        <div>
                            <Link to={`/users/${comment.userId}`} >{comment.userId}</Link>
                            <h2>{comment.createdAt}</h2>
                        </div>
                        <div>
                            <h2>Comment content</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments;
