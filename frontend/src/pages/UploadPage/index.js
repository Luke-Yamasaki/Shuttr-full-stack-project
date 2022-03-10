import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';

import Navbar from "../../components/Navbar";

const UploadPage = () => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        
    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}} >
            <Navbar />
            <div style={{ width: '100vw', height: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
                <h1 style={{ color: 'white' }}>Upload your image!</h1>
                <div>
                    <form onSubmit={handleSubmit} style={{ width: '700px', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white' }}>
                        <label for='url'>Image URL</label>
                        <input type='url' value={url} placeholder='Add an image URL...' onChange={(e) => setUrl(e.target.value)} name='url' required/>
                        <label>Title (Up to 50 characters)</label>
                        <input type='text' size='50' value={title} placeholder='Add a title...' onChange={(e) => setTitle(e.target.value)} />
                        <label>Description (Up to 300 characters)</label>
                        <input type='text' value={description} placeholder='Add a description...' onChange={(e) => setDescription(e.target.value)} />
                        <button>Submit</button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default UploadPage;
