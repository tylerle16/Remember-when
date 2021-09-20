import {useState}from 'react'
import UploadField from './Content/UploadField'
import {Form } from 'react-bootstrap'

function NewImages() {
    const [image, setImage] = useState('');

    return (
        <Form>
                <Form.Group controlId={image}  className="mb-3" >
                    <Form.Label> Upload Image Here</Form.Label>
                    <UploadField value={image} onUpload={(url) => setImage(url)} />
                    {/* <Form.Control type={} value={images} onUpload={e => setImages(e.target.value)} /> */}
                </Form.Group>
            </Form>
    )
}

export default NewImages
