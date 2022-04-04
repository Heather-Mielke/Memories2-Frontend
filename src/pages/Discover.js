
import React, { useEffect } from "react";
import Photos from "../components/photos/Photos";


const Discover = () => {
 
    useEffect(()=>{
        window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route

    }, [])
    
    return(
        <>
            <Photos />
        </>
    )

}

export default Discover