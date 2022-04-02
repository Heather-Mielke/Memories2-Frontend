
import React, { useEffect } from "react";
import Photos from "../components/photos/Photos";
import Navbar from "../components/Navbar";

const Discover = ({query}) => {

    useEffect(()=>{
        window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route
    }, [])
    return(
        <>
            <Photos query={query}/>
        </>
    )

}

export default Discover