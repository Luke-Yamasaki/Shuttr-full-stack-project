import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

const Comments = ({user}) => {
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

        return dispatch(commentActions.postComment(commentData)).catch(
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
                        <Link to={`/users`} ></Link>
                        <h2>created at</h2>
                    </div>
                    <div>
                        <h2>Comment content</h2>
                    </div>
                </div>
            </div>
            <div style={{width: '450px', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'white'}}>
                <img src={user.profileImageUrl} style={{height: '30px', width: '30px', borderRadius: '100%'}}></img>
                <form onSubmit={handleSubmit}>
                    <textarea placeholder='Add a comment' style={{width: '385px', height: '85px', padding: 'none'}} />
                    <button type='submit'>Comment</button>
                </form>
            </div>
        </div>
    )
}

export default Comments;
