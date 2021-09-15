import React from 'react'
import Title from '../Content/Title'
// import ImageProgressBar from '../Content/ImageProgressBar'
// import UploadForm from '../Content/UploadForm'
import { Container, Card } from 'react-bootstrap';



function Homepage() {





    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                        <Title/>
                    </Card.Title>
                </Card.Body>
            </Card>



        </Container>
    )

}

            // <UploadForm/>
            // <ImageProgressBar/>

export default Homepage;
