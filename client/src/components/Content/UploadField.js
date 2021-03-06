/* *************************TYLERS CODE  */ 


import React, { useState } from 'react'
import ImageProgressBar from './ImageProgressBar'


const UploadField = ({onUpload, value}) => {
const [error, setError] = useState(null)
const [file, setFile] = useState(null)

// image types that can be uploaded
const types = ['image/png', 'img/jpeg', 'image/jpeg']

const changeHandler = (e) =>{

let selected = e.target.files[0]
console.log(selected);

if (selected && types.includes(selected.type)){
    setFile(selected);
    // function to erase error message if selected file type is supported 
    setError('');
}else{
    
    setError('please select an image file (png or jpeg)');
}

}
const handleUpload = (url) => {
    
    onUpload(url)
}

    return (
        <div>
            {value?(
                <img src={value} alt=""/>

            ):(
                <>
                <input type="file" onChange={changeHandler}/>
                {/* function to display errors if selected file is not supported */}
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ImageProgressBar onUpload={handleUpload}file={file} setFile={setFile}/>}
                </div>
                </>
            )}
        </div>
    )
}

export default UploadField
