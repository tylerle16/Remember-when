import React, { useEffect, useState } from 'react'
import NewImages from '../NewImages';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { homepageContainer } from './HomepageElements';
import CharacterDropDown from '../CharacterDropdown';












function Homepage() {
    // set Images 
    const [images, setImages] = useState([])
    const [category, setCategory] = useState('');



    function fetchImages(category) {
        let url = '/api/v1/images'

        if (category) {
            url += '?category=' + category
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setImages(data)
                console.log(data)
            })

    }
    useEffect(() => {
        fetchImages(category)
    }, [category])

    


    return (

        

        <>

            <homepageContainer>
                <NewImages /><br />
                <Container>
                    <CharacterDropDown value={category} onChange={(e) => setCategory(e.target.value)} /><br/>
                    <Row>
                        {images.map((image) => {
                            return (
                                <Col xs={12} md={6} lg={4} xl={3} >

                                    <Card className='mb-3' >
                                        <Card.Img variant="top" src={image.url} className="img-fluid" alt="Movie-Poster" />
                                        <Card.Body>
                                            <Card.Text>{image.description}</Card.Text>

                                        </Card.Body>
                                    </Card>


                                </Col>
                            )
                        }
                        )
                        }



                    </Row>
                </Container>
            </homepageContainer>
        </>




    )

}




export default Homepage;
