import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const StyledInput = styled.input`
    width: 100%;
    border-color: black;
    padding: 5px;
`;

export default function PicUploader() {
    const [image, setImage] = useState("");

    function upload(event) {
        const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append("upload_preset", PRESET);

        axios
            .post(url, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })
            .then(onImageSave)
            .catch(err => console.error(err));
    }

    function onImageSave(response) {
        setImage(response.data.url);
    }

    return (
        <>
            {image ? (
                <img src={image} alt="" style={{ width: "100%" }} />
            ) : (
                <StyledInput type="file" name="file" onChange={upload} />
            )}
        </>
    );
}
