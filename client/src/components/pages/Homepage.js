import React from 'react'

import Title from '../Content/Title'

import UploadForm from '../Content/UploadForm'
import {Container} from 'react-bootstrap'



function Homepage() {
    return (
        
        <div>
            
            
            <Title/>
            <Container>
            <UploadForm/>
            
            </Container>
        </div>
    )
}

export default Homepage
