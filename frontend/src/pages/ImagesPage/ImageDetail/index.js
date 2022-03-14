import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import styles from './ImageDetail.module.css';
import { deleteImage, getImages } from '../../../store/images';

const ImageDetail = ({images, users}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObj = useSelector(state => state.imagesState.images);
    let updatedImages;
    const imagesArr = Object.values(imagesObj)
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [deletedId, setDeletedId] = useState('');

    // useEffect(() => {
    //     dispatch(getImages())
    // },[dispatch])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteImage(Number(e.target.name))).then(() => dispatch(getImages()))
    }

    return  (
        <>
            {images.map(image => (
                <div key={image.id} style={{width: '500px', height: '300px', backgroundColor: 'rgba(0, 0, 0, 0.75)', borderRadius: '0.25rem', marginBottom: '2px'}}>
                    <div style={{backgroundImage: `url(${image.imageUrl})`}} className={styles.image}>
                        <div className={styles.infoDiv} onMouseOver={(e) => e.target.style.opacity = '100%' } onMouseLeave={(e) => e.target.style.opacity = '0%' }>
                            <Link className={styles.imageInfo} to={`/images/${image.id}`} key={image.id}>Title: {image.title}</Link>
                            <Link className={styles.imageInfo} to={`/users/${image.userId}`}>By: {users[image.userId].firstName} {users[image.userId].lastName} </Link>

                            {image.userId === sessionUser.id ?
                                <div className={styles.buttonWrapper}>
                                    <div className={styles.comments}>Comments</div>
                                    <div className={styles.btnDiv}>
                                        <Link className={styles.editLink} to={`/images/${image.id}`} >Edit</Link>
                                        <div className={styles.delBtn} name={image.id} onClick={(e) => handleDelete(e)}>Delete</div>
                                    </div>
                                </div>
                                :
                                <div className={styles.comments}>Comments</div>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ImageDetail;
