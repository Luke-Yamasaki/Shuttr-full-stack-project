import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import styles from './404Page.module.css';
import Navbar from '../../components/Navbar/index';

const NotFoundPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(sessionUser) {
            setLoggedIn(true)
        } else return
    })

    return (
        <div>
            {loggedIn &&
                <Navbar></Navbar>
            }
            <h1>404 Not Found</h1>
            <svg viewbox="0 0 2500 100" className={styles.svg}>
                <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="200">
                    <image href={sessionUser.profileImageUrl} x="0" y="0" width="100" height="100" />
                </pattern>
                </defs>
                <path fill="url(#img1)" stroke="red"
                    d="M 0,100
                    Q 15,15 500,50
                    t 500,0
                    Q 1000,25 1500,50
                    t 500,0
                    Q 2000,25 2500,50
                    t 500,0
                    L 3000,100 3000,200
                    L 3000,200 0, 200
                    L 0,200 0,100 z
                    " />
            </svg>
            {/* <img src={sessionUser.profileImageUrl} style={{width: '1000px', height: '750px'}}></img> */}
        </div>
    )
};

export default NotFoundPage;
