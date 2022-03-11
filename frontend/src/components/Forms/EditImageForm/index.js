import React, { useState } from "react";
import * as imageActions from "../../../store/images"
import { useDispatch } from "react-redux";
import styles from './EditImageForm.module.css';

function EditForm({imageObj}) {
    const imageId = imageObj.id
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(imageObj.imageUrl);
    const [title, setTitle] = useState(imageObj.title);
    const [description, setDescription] = useState(imageObj.description);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(imageActions.editImage({ imageId, imageUrl, title, description })).catch(
        async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        }
        );
    };

    const handleReset = (e) => {
        e.preventDefault();
        setImageUrl(imageObj.imageUrl);
        setTitle(imageObj.title);
        setDescription(imageObj.description);
    }

    return (
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label>
                    Image URL
                    <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <label>
                    Title
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
    );
}

export default EditForm;
