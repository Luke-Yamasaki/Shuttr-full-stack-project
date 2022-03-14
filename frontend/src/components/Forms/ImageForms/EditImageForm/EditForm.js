import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { editImage, getOneImage, getImages } from '../../../../store/images';

import styles from './EditForm.module.css';

const EditForm = () => {
    const {id} = useParams();
    const imagesObj = useSelector(state => state.imagesState.images);
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');
    const [previewImg, setPreviewImg] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [urlError, setUrlError] = useState([]);
    const [titleError, setTitleError] = useState([]);
    const [descriptionError, setDescriptionError] = useState([]);
    const [loaded, setLoaded] = useState(false);

    let image;

    useEffect(() => {
        dispatch(getImages()).then(() => setLoaded(true));
    },[])

    // useEffect(() => {
    //     console.log(imagesObj)
    // },[dispatch, id])


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
            userId: sessionUser.id,
            imageId: id,
            imageUrl,
            title,
            description
        };

        const newImage = await dispatch(editImage(formData))
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
            history.push('/images')
        }
    };

    return loaded && (
        <div className={styles.formWrapper}>
            <h1 style={{ color: 'white' }}>Edit your image!</h1>
            <div className={styles.formContents}>
                <div style={{backgroundImage: `url(${imagesObj[id].imageUrl})`}} className={styles.preview}></div>
                <form onSubmit={handleSubmit} style={{ width: '400px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    {urlError && (
                        urlError.map(error =>
                            <p key={error.id} style={{color: 'white',  fontFamily: 'sans-serif', padding: 'none'}}>{error}</p>
                        )
                    )}
                    <label>Image URL</label>
                    <input type='url' value={imageUrl} placeholder={imagesObj[id].imageUrl} onChange={handleChange} name='url' required/>
                    {titleError && (
                        titleError.map(error =>
                            <p key={error.id} style={{margin: '-20px 0px -20px 0px', color: 'rgba(200, 0, 0, 1)',  fontFamily: 'sans-serif', padding: 'none'}}>{error}</p>
                        )
                    )}
                    <label>Title (Up to 50 characters)</label>
                    <input type='text' size='50' value={title} placeholder={imagesObj[id].title} onChange={(e) => setTitle(e.target.value)} />
                    {descriptionError && (
                        descriptionError.map(error =>
                            <p key={error.id} style={{color: 'rgba(200, 0, 0, 1)',  fontFamily: 'sans-serif', padding: 'none'}}>{error}</p>
                        )
                    )}
                    <label>Description (Up to 300 characters)</label>
                    <textarea type='text' value={description} placeholder={imagesObj[id].description} onChange={(e) => setDescription(e.target.value)} />
                    <div className={styles.buttonWrapper}>
                        <button type='button' className={styles.fomrButtons} style={{width: '100px', height: '35px', backgroundColor: '#d65fab', border: 'none', borderRadius: '0.25rem', color: 'white'}} onClick={handleReset}>Reset</button>
                        <button type='submit' className={styles.fomrButtons} style={{width: '300px', height: '35px', backgroundColor: '#128fdc', border: 'none', borderRadius: '0.25rem', color: 'white'}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditForm;
