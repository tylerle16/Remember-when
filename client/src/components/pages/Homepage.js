import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Title from '../Content/Title';
import { homepageContainer } from './HomepageElements';

// import ImageProgressBar from '../Content/ImageProgressBar'
// import UploadForm from '../Content/UploadForm'







function Homepage() {
// set Images 
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('/api/v1/images')
            .then(res => res.json())
            .then(data => {
                setImages(data)
                console.log(data)
            })
            
    }, [])

    


    return (
        
        <homepageContainer>
        <Row>
        {/* {images.map((image) => { */}
            {/* return ( */}
                <Col>
                <Row>
            {/* <cardContainer> */}
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            {/* // <UploadForm/> */}
                        </Card.Title>
                    </Card.Body>
                </Card>
                {/* </cardContainer> */}
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F08%2FRottweiler2.jpg%3Fx70195&f=1&nofb=1" className="img-fluid" alt="Movie-Poster" />
                    <Card.Body>
                        <Card.Title>
                            <Title/>
                            
                        </Card.Title>
                    </Card.Body>
                </Card>
                </Row>
            </Col>
    
            {/* ) */}
                
        </Row>
        </homepageContainer>

        
    
    )

}

            // <UploadForm/>
            // <ImageProgressBar/>

export default Homepage;
