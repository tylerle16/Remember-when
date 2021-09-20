import React, {useState} from "react";
import InfoSection from "../InfoSection"
import { homeObjOne, homeObjTwo } from "../InfoSection/Data"
import Sidebar from "../Sidebar";


const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
        </>
    )
}


export default Landing