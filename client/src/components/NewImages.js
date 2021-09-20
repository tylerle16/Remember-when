import { useState } from 'react'
import UploadField from './Content/UploadField'
import { Container, Form, Button } from 'react-bootstrap'
import CharacterDropDown from './CharacterDropdown';

function NewImages() {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Family');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/images', {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json'
            },
            body: JSON.stringify({
                url,
                description,
                category
            })

        })

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId={url} className="mb-3" >
                    <Form.Label> Upload Image Here</Form.Label>
                    <UploadField value={url} onUpload={(url) => setUrl(url)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} type="description" onChange={(e) => setDescription(e.target.value)} placeholder="Enter description here" />
                </Form.Group><br />
                <Form.Group>
                    <CharacterDropDown value={category} onChange={(e) => setCategory(e.target.value)} />
                </Form.Group><br />
                <Button variant="info" type="submit">
                    Upload
                </Button>
            </Form>
        </Container>
    )
}

export default NewImages
