import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import styles from './ImageDetail.module.css';
import { deleteImage } from '../../../store/images';

const ImageDetail = (images) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObj = useSelector(state => state.imagesState.images);
    let updatedImages;
    const imagesArr = Object.values(imagesObj)
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [deletedId, setDeletedId] = useState('');

    // useEffect(() => {
    //     updatedImages = useSelector(state => state.imagesState.images)
    // },[imagesObj])

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(deleteImage(Number(e.target.innerText)))
    }

    return  (
        <>
            {imagesArr.map(image => (
                <div key={image.id} style={{width: '500px', height: '400px'}}>
                    <img src={image.imageUrl} className={styles.image}></img>
                    <div>
                        <div>
                            <Link to={`/images/${image.id}`} key={image.id}>{image.title}</Link>
                            <Link to={`/users/${image.userId}`}>- by userId: {image.userId} </Link>
                        </div>

                        {image.userId === sessionUser.id ?
                            <div>
                                <button>Comments</button>
                                <Link className={styles.editLink} to={`/images/${image.id}`}>Edit</Link>
                                <button name={image.id} onClick={(e) => handleDelete(e)}>{image.id}</button>
                            </div>
                            : <button>Comments</button>
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default ImageDetail;
