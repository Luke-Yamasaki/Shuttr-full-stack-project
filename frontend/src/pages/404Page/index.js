import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import styles from './404Page.module.css';
import Navbar from '../../components/Navbar/index';
import SpecialVector from './SpecialVector';

const NotFoundPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(sessionUser) {
            setLoggedIn(true)
        } else setLoggedIn(false)
    })

    return (
        <div className={styles.notFoundWrapper}>
            {loggedIn &&
                <Navbar></Navbar>
            }
            <h1 style={{marginTop: '50px'}}>404 Not Found</h1>
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
            <SpecialVector />
        </div>
    )
};

export default NotFoundPage;
