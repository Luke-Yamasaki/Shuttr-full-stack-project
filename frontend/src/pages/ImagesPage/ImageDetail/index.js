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
                <div key={image.id} style={{width: '500px', height: '300px', backgroundColor: 'rgba(0, 0, 0, 0.75', margin: '1px 1px 1px 1px'}}>
                    <div style={{backgroundImage: `url(${image.imageUrl})`}} className={styles.image}>
                        <div className={styles.infoDiv} onMouseOver={(e) => e.target.style.opacity = '100%' } onMouseLeave={(e) => e.target.style.opacity = '0%' }>
                            <Link className={styles.imageInfo} to={`/images/${image.id}`} key={image.id}>Title: {image.title}</Link>
                            <Link className={styles.imageInfo} to={`/users/${image.userId}`}>By: {users[image.userId].firstName} {users[image.userId].lastName} </Link>
                            <div>
                                <button>Comments</button>
                                {image.userId === sessionUser.id &&
                                    <>
                                        <Link className={styles.editLink} to={`/images/${image.id}`} >Edit</Link>
                                        <button name={image.id} onClick={(e) => handleDelete(e)}>Delete</button>
                                    </>
                                }
                            </div>

                        </div>

                    </div>
                    <div>
                        {image.userId === sessionUser.id ?
                            <div>
                                <button>Comments</button>

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
