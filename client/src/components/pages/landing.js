import React from "react";
import InfoSection from "../InfoSection"
import { homeObjOne, homeObjTwo } from "../InfoSection/Data"


const Landing = () => {

    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
        </>
    )
}


export default Landing