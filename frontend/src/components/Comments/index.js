import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import * as commentActions from '../../store/comments';

const Comments = ({user, comment}) => {
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
        <div>Comments
            <div>
                <img></img>
                <div>
                    <div>
                        <Link to={`/users/${user.id}`} ></Link>
                        <h2>created at</h2>
                    </div>
                    <div>
                        <h2>Comment content</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;
