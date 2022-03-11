import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import styles from './UploadPage.module.css';
import { createImage } from '../../store/images';

import Navbar from "../../components/Navbar";

const UploadPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            userId,
            imageUrl,
            title,
            description
        };

        const createdImage = await dispatch(createImage(formData));
        if(createdImage) {
            history.push(`/images/${createdImage.id}`);
        };
    };

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}} >
            <Navbar />
            <div style={{ width: '100vw', height: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
                <h1 style={{ color: 'white' }}>Upload your image!</h1>
                <div className={styles.formContents}>
                    <form onSubmit={handleSubmit} style={{ width: '600px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <label>Image URL</label>
                        <input type='url' value={imageUrl} placeholder='Add an image URL...' onChange={(e) => setImageUrl(e.target.value)} name='url' required/>
                        <label>Title (Up to 50 characters)</label>
                        <input type='text' size='50' value={title} placeholder='Add a title...' onChange={(e) => setTitle(e.target.value)} />
                        <label>Description (Up to 300 characters)</label>
                        <textarea type='text' value={description} placeholder='Add a description...' onChange={(e) => setDescription(e.target.value)} />
                        <button style={{width: '570px', height: '35px'}}>Submit</button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default UploadPage;
