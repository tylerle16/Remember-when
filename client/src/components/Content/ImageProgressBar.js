// import React from 'react';
import useStorage from '../hooks/useStorage';
import React, { useEffect } from 'react'

// class ProgressBar extends React.Component
const ImageProgressBar = ({file, setFile, onUpload}) => {
const {url, progress} = useStorage(file) ;
    
// useEffect to remove status loading bar after url has uploaded
useEffect(() => {
    if (url){
        setFile(null)
        onUpload(url)
    };

}, [url, setFile, onUpload])



    return (
        // <div className="progress-bar" style={{width: progress + '%'}}>Progress</div>
<div className="progression">
<span className="colored-progress-bar" style={{width: progress  + '%'}}></span>
</div>
        
    )
}

export default ImageProgressBar;
