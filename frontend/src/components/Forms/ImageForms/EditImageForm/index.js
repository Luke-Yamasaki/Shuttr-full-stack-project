import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import styles from './EditImageForm.module.css';
import Navbar from "../../../../components/Navbar/"
import EditForm from './EditForm';

const EditImageForm = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // console.log(sessionUser)
    },[dispatch])

    if(!sessionUser) {
        return history.push('/')
    }

    return (
        <div className={styles.uploadWrapper} >
            <Navbar />
            <EditForm/>
        </div>
    )
}

export default EditImageForm;
