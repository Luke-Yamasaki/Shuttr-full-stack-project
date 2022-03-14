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
    const [previewImg, setPreviewImg] = useState('https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [urlError, setUrlError] = useState([]);
    const [titleError, setTitleError] = useState([]);
    const [descriptionError, setDescriptionError] = useState([]);

    if(!sessionUser) {
        return history.push('/')
    }

    const userId = sessionUser.id;


    const reset = () => {
        setImageUrl('');
        setTitle('');
        setDescription('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setPreviewImg(e.target.value);
        setImageUrl(e.target.value);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setImageUrl('');
        setTitle('');
        setDescription('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlError([]);
        setTitleError([]);
        setDescriptionError([]);

        const formData = {
            userId,
            imageUrl,
            title,
            description
        };

        const newImage = await dispatch(createImage(formData))
            .catch(async (res) => {
                const data = await res.json();
                const urlErr = [];
                const titleErr = [];
                const descErr = [];

                if(data && data.errors) {
                    data.errors.map(error => {
                        if(error.toLowerCase().includes('url')) {
                            return urlErr.push(error)
                        } else if(error.toLowerCase().includes('title')) {
                            return titleErr.push(error)
                        } else if(error.toLowerCase().includes('description')) {
                            return descErr.push(error)
                        } else return
                    })
                }
                setUrlError(urlErr);
                setTitleError(titleErr);
                setDescriptionError(descErr);
            })

        if(newImage) {
            history.push(`/images/${newImage.image.id}`)
        }
    };

    return (
        <div className={styles.formWrapper}>
            <h1 style={{ color: 'white' }}>Upload your image!</h1>
            <div className={styles.formContents}>
                <div style={{backgroundImage: `url(${previewImg})`}} className={styles.preview}></div>
                <form onSubmit={handleSubmit} style={{ width: '400px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    {urlError && (
                        urlError.map(error =>
                            <p key={error.id} style={{color: 'white',  fontFamily: 'sans-serif', padding: 'none'}}>{error}</p>
                        )
                    )}
                    <label>Image URL</label>
                    <input type='url' value={imageUrl} placeholder='Add an image URL...' onChange={handleChange} name='url' required/>
                    {titleError && (
                        titleError.map(error =>
                            <p key={error.id} style={{margin: '-20px 0px -20px 0px', color: 'rgba(200, 0, 0, 1)',  fontFamily: 'sans-serif', padding: 'none'}}>{error}</p>
                        )
                    )}
                    <label>Title (Up to 50 characters)</label>
                    <input type='text' size='50' value={title} placeholder='Add a title...' onChange={(e) => setTitle(e.target.value)} />
                    {descriptionError && (
                        descriptionError.map(error =>
                            <p key={error.id} style={{color: 'rgba(200, 0, 0, 1)',  fontFamily: 'sans-serif', padding: 'none'}}>{error}</p>
                        )
                    )}
                    <label>Description (Up to 300 characters)</label>
                    <textarea type='text' value={description} placeholder='Add a description...' onChange={(e) => setDescription(e.target.value)} />
                    <div className={styles.buttonWrapper}>
                        <button type='button' className={styles.fomrButtons} style={{width: '100px', height: '35px', backgroundColor: '#d65fab', border: 'none', borderRadius: '0.25rem', color: 'white'}} onClick={handleReset}>Reset</button>
                        <button type='submit' className={styles.fomrButtons} style={{width: '300px', height: '35px', backgroundColor: '#128fdc', border: 'none', borderRadius: '0.25rem', color: 'white'}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ImageForm;
