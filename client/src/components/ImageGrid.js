import React from "react";
import useFirestore from '../hooks/'
const ImageGrid = () => {

    const {docs} = useFirestore('images')
    return (
        <div className="img-grid">
            images
        </div>
    )
}

export default ImageGrid
