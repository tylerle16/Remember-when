import React from 'react'
import Title from '../Content/Title'
// import ImageProgressBar from '../Content/ImageProgressBar'
// import UploadForm from '../Content/UploadForm'
import { Container, Card, Col, Row } from 'react-bootstrap';



function Homepage() {





    return (
        <Container>
        <Col>
            <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>
                        <Title/>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>
                        <Title/>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>
                        <Title/>
                    </Card.Title>
                </Card.Body>
            </Card>
            </Row>
        </Col>


        </Container>
    )

}

            // <UploadForm/>
            // <ImageProgressBar/>

export default Homepage;
