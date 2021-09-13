import React, {useState} from "react";
import InfoSection from "../InfoSection"
import { homeObjOne, homeObjTwo } from "../InfoSection/Data"

import Navbar from "../Navbar";
import Footer from "../Footer"
import InfoSection from "../InfoSection";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Footer />
        </>
    )
}


export default Landing