import React from 'react';
import useStorage from '../hooks/useStorage';


// class ProgressBar extends React.Component
const ImageProgressBar = ({file, setFile}) => {
const {url, progress} = useStorage(file) ;
console.log(progress, url);
    return (
        <div className="progress-bar">Progress</div>
    )
}

export default ImageProgressBar;
