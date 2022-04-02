import AddPostForm from "../components/AddPost";
import React, { useEffect } from "react";

const AddPost = () => {
    useEffect(()=>{
        window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route
    },[])
    return(
        <>
        <AddPostForm/>
        </>
    )
}

export default AddPost