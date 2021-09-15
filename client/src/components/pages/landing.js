import React from "react";
import InfoSection from "../InfoSection"
import { homeObjOne, homeObjTwo } from "../InfoSection/Data"

// import Navbar from "../Navbar";
// import Footer from "../Footer"

const Landing = () => {

    return (
        <>
            {/* <Navbar /> */}
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            {/* <Footer /> */}
        </>
    )
}


export default Landing