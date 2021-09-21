import React from 'react';
import { AboutContainer, AboutWrapper, Name, Github } from './AboutElements'
import { Card, Col, Row } from 'react-bootstrap'
import {AiOutlineGithub} from 'react-icons/ai';
const About = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <Row>
                    <Col>
                        <Row>
                            <Card style={{ width: '18rem', margin: '0.625rem' }}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/84754487?v=4" className="img-fluid" alt="Movie-Poster" />
                                <Card.Body>
                                    <Card.Title>
                                        <Name> Tyler Le </Name>
                                    </Card.Title>
                                    <Card.Link>
                                        <a href="https://github.com/tylerle16"><AiOutlineGithub/></a>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', margin: '0.625rem' }}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/85178436?v=4" className="img-fluid" alt="Movie-Poster" />
                                <Card.Body>
                                    <Card.Title>
                                        <Name> Mickell Gladness</Name>
                                    </Card.Title>
                                    <Card.Link>
                                        <a href="https://github.com/MickellGlad32"><AiOutlineGithub/></a>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', margin: '0.625rem' }}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/79027880?v=4" className="img-fluid" alt="Movie-Poster" />
                                <Card.Body>
                                    <Card.Title>
                                        <Name> William Wilkerson </Name>
                                    </Card.Title>
                                    <Card.Link>
                                        <a href="https://github.com/williewilkerson27"><AiOutlineGithub/></a>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', margin: '0.625rem' }}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/50714402?v=4" className="img-fluid" alt="Movie-Poster" />
                                <Card.Body>
                                    <Card.Title>
                                        <Name>Kevin Leon</Name>
                                    </Card.Title>
                                    <Card.Link>
                                        <Github href="https://github.com/kevinleon01"><AiOutlineGithub/></Github>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About