import React, {memo, useState} from "react";
import { IoExpand } from "react-icons/io5";
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from "react-router-dom";
import axios from "axios";
import { getPhotos} from "./photos/photoSlice";
import { useDispatch } from "react-redux";
import './modal/Expand.css'
import { MdOutlineCloseFullscreen, MdSend } from 'react-icons/md'

const Photo = ({ onDelete, id, image, caption, description, likes, creator, setDisplay}) => {
    const dispatch = useDispatch()
    const [expand, setExpand] = useState(false)


    const addLikes =(id) => {
        likes +=1
        console.log(id)
        axios.put(`https://photo-memories-forever.herokuapp.com/api/photos/${id}`, {
            image: image,
            caption: caption,
            description: description,
            likes: likes
        }).then(()=> dispatch(getPhotos()))
    }

 
    return (
        <>
            <article key={id} className=' relative text-sm cards'>
                <img src={image} alt='post' className='rounded-lg'/>
                <button className='absolute top-0 right-0 mr-1 mt-1 text-2xl p-5' onClick={() => setExpand(true)}><IoExpand className='absolute top-0 right-0 mr-1 mt-1'/></button>
                <div className='flex justify-between'>
                    <h3 className="font-bold pt-1">{caption}</h3>
                </div>
                <p className="text-xs pt-1 date">by {creator}</p>
                <div className="flex w-15  pb-1">
                    <button onClick={() => addLikes(id)} className="heart">❤️ <span className="mx-1 text-xs mr-4">{likes}</span></button>
                    <button onClick={() => setExpand(true)}>💬</button>
                </div>
                          
             </article>
             { expand ? 
                <div className='overlay'>
                     <div className='modal'>
                    <div className='expand-image-container'>
                         <img src={image} alt='post' />
                    </div>
                     <div className='expand-contents'>
                        <h3 className='text-black caption'>{caption}</h3>
                        <p className='text-black creator'>By: {creator}</p>
                        <p className='likes'>{likes} likes</p>
                        <p className='text-black description'>{description}</p>
                        <div className="pt-1 w-full flex justify-end align-center">
                            <Link to={'/editpost/'+ id}><button className="text-sm pr-1" onClick={() => setDisplay(false)}><MdEdit/></button></Link>
                             <button className="text-sm pb-1" onClick={() => onDelete(id)}><MdDelete/></button>
                        </div>  
                        <p className="w-full ml-32 text-black comment">Comments</p> 
                        <textarea 
                        className="m-5 py-2 px-2 pb-14 w-11/12 ml-20 text-black rounded-3xl comment-box" 
                        type='text' 
                        placeholder="Coming Soon...">
                        </textarea>
                        <button className="text-xl flex justify-end w-full send"><MdSend/></button>
                    </div>
                    
                    <button onClick={() => setExpand(false)} className='close'><MdOutlineCloseFullscreen/></button>
                 </div>
             </div>
             :
        ""
    }
        </>
     )
}




export default memo(Photo)

