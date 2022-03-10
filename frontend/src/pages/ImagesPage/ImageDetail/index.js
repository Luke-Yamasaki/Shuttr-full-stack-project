import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const ImageDetail = (images) => {
    const sessionUser = useSelector(state => state.session.user);
    // const [isLoaded, setIsLoaded] = useState(false);
    const imagesArr = [];

    let count = 1;

    while(count < 1000) {
        imagesArr.push(images.images[count]);
        count++;
        // if(count === 998) {
        //     setIsLoaded(true)
        // }
    }



    return  (
        <>
            {imagesArr.map(image => (
                <div key={image.id} style={{width: '400px', height: '300px'}}>
                    <img src={image.imageUrl}></img>
                    <div>
                        <div>
                            <Link to={`/images/${image.id}`} key={image.id}>{image.title}</Link>
                            <Link to={`/users/${image.userId}`}>by {image.userId} </Link>
                        </div>

                        {image.userId === sessionUser.id ?
                            <div>
                                <button>Comments</button>
                                <button>Edit</button>
                                <button>Delete</button>
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
