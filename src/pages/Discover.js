
import axios from "axios";
import React, { useEffect, useState } from "react";
import api from '../api/posts'
import { IoExpand } from "react-icons/io5";
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from "react-router-dom";
import Photos from "../components/photos/Photos";

const Discover = () => {

    return(
        <>
        <Photos/>
        </>
        
    )
//     const [posts, setPosts] = useState([])
//     const baseURL = 'https://photo-memories-forever.herokuapp.com'
   
//     const handleCreate = (addPost) => {
//        axios.post(`${baseURL}/api/posts`, addPost)
//        .then((res)=> {
//         console.log(res)
//         setPosts([...posts, res.data])
//        })
//    }

//     useEffect(() => {
//         const getPosts = async () => {
            
//             try {
//                 const response = await api.get('api/photos')
//                 setPosts(response.data)
//             }catch (err){
//                 if (err.response) {
//                     console.log(err.response.data)
//                     console.log(err.response.status)
//                     console.log(err.response.headers)
//                 }else {
//                     console.log(`Error: ${err.message}`)
//                 }
//             }
           
//         }
//         getPosts()
//     }, [])
//     return(
//         <>
//         <div className=' flex justify-center mt-16'>
//         <h2 className=' text-3xl text-white title new-post'>Discover</h2>
//         </div>
//         <section className="masonary-container">
//             {posts.map((post) => {
//                 return(
//                     <article key={post.id} className=' relative text-sm cards'>
//                     <img src={post.image} alt='post' className='rounded-lg'/>
//                     <button className='absolute top-0 right-0 mr-1 mt-1 text-2xl p-5'><IoExpand className='absolute top-0 right-0 mr-1 mt-1'/></button>
//                     <div className='flex justify-between'>
//                     <h3 className="font-bold pt-1">{post.caption}</h3>
//                     <div className="pt-1 pb-2">
//                     <Link to='/editpost'><button className="text-s"><MdEdit/></button></Link>
//                     <button className="text-s"><MdDelete/></button>
//                     </div>
//                     </div>
//                     <div className="flex w-10  pb-1">
//                         <button onClick='add' className="heart">❤️</button>
//                     </div>
//                     {/* <p>{post.description}</p>  */}
                    
//                 </article>
                
//                 ) })}
//         </section>
//         </>
//     )
}

export default Discover