import React, { useEffect, useState } from 'react'

import NewImages from '../NewImages';

import { Container, Card, Col, Row } from 'react-bootstrap';
import Title from '../Content/Title';

import { homepageContainer } from './HomepageElements';
import Sidebar from '../Sidebar';










function Homepage() {
    // set Images 
    const [images, setImages] = useState([])

    function fetchImages(data) {
        fetch('/api/v1/images')
            .then(res => res.json())
            .then(data => {
                setImages(data)
                console.log(data)
            })

    }
    useEffect(() => {
        fetchImages()
    }, [])




    return (

        <>

            <homepageContainer>
                <NewImages />
                <Row>
                    {images.map((image) => {
                        return (
                            <Col>
                                <Row>
                                    <Card style={{ width: '24rem' }}>
                                        <Card.Img variant="top" src={image.url} className="img-fluid" alt="Movie-Poster" />
                                        <Card.Body>
                                            <Card.Text>{image.description}</Card.Text>

                                        </Card.Body>
                                    </Card>

                                </Row>
                            </Col>
                        )
                    }
                    )
                    }
                    )


                </Row>
            </homepageContainer>
        </>




    )

}


// <ImageProgressBar/>

export default Homepage;
