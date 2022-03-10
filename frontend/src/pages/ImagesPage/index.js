import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import styles from './ImagesPage.module.css';
import Navbar from '../../components/Navbar/index';

const ImagesPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(sessionUser) {
            setLoggedIn(true)
        } else return
    })

    return (
        <div className={styles.notFoundWrapper}>
            {loggedIn &&
                <Navbar></Navbar>
            }
            <h1 style={{marginTop: '50px'}}>Images</h1>
            
            {/* <img src={sessionUser.profileImageUrl} style={{width: '1000px', height: '750px'}}></img> */}
        </div>
    )
};

export default ImagesPage;
