import React, {useState} from "react";
import AboutSection from '../About'
import { aboutObjOne } from "../About/Data"
import Sidebar from "../Sidebar";


const About = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen   )
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <AboutSection {...aboutObjOne} />
        </>

    )
}

export default About