import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import styles from './UploadPage.module.css';
import Navbar from "../../components/Navbar";
import ImageForm from '../../components/Forms/ImageForms';

const UploadPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log(sessionUser)
    },[dispatch])

    if(!sessionUser) {
        return history.push('/')
    }

    return (
        <div className={styles.uploadWrapper} >
            <Navbar />
            <ImageForm/>
        </div>
    )
}

export default UploadPage;
