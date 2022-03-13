import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { createImage } from '../../../store/images';

import styles from './ImageForm.module.css';

const ImageForm = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    if(!sessionUser) {
        return history.push('/')
    }
    const userId = sessionUser.id;


    const reset = () => {
        setImageUrl('');
        setTitle('');
        setDescription('');
    }

    const handleReset = (e) => {
        e.preventDefault();
        setImageUrl('');
        setTitle('');
        setDescription('');
    }

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
                reset();
                history.push(`/images/${createdImage.id}`);
            };
    };

    return (
        <div className={styles.formWrapper}>
            <h1 style={{ color: 'white' }}>Upload your image!</h1>
            <div className={styles.formContents}>
                <img src={imageUrl} className={styles.preview}></img>
                <form onSubmit={handleSubmit} style={{ width: '400px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <label>Image URL</label>
                    <input type='url' value={imageUrl} placeholder='Add an image URL...' onChange={(e) => setImageUrl(e.target.value)} name='url' required/>
                    <label>Title (Up to 50 characters)</label>
                    <input type='text' size='50' value={title} placeholder='Add a title...' onChange={(e) => setTitle(e.target.value)} />
                    <label>Description (Up to 300 characters)</label>
                    <textarea type='text' value={description} placeholder='Add a description...' onChange={(e) => setDescription(e.target.value)} />
                    <div>
                        <button type='button' style={{width: '70px', height: '35px'}} onClick={handleReset}>Reset</button>
                        <button type='submit' style={{width: '300px', height: '35px'}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ImageForm;
