import React, {memo, useEffect, useState} from "react";
import { IoExpand } from "react-icons/io5";
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from "react-router-dom";
import axios from "axios";
import { getPhotos} from "./photos/photoSlice";
import { useDispatch } from "react-redux";

const Photo = ({ onDelete, id, image, caption, description, likes, post_date, creator, display, setDisplay}) => {
    const dispatch = useDispatch()
    const [expand, setExpand] = useState(false)


    const addLikes =(id) => {
        likes +=1
        console.log(id)
        axios.put(`https://photo-memories-forever.herokuapp.com/api/photos/${id}`, {
            image: image,
            caption: caption,
            description: description,
            likes: likes,
            post_date: post_date
        }).then(()=> dispatch(getPhotos()))
    }

 
    return (
        <>
            <article key={id} className=' relative text-sm cards'>
                <img src={image} alt='post' className='rounded-lg'/>
                <button className='absolute top-0 right-0 mr-1 mt-1 text-2xl p-5'><IoExpand className='absolute top-0 right-0 mr-1 mt-1'/></button>
                <div className='flex justify-between'>
                    <h3 className="font-bold pt-1">{caption}</h3>
                    <div className="pt-1">
                        <Link to={'/editpost/'+ id}><button className="text-s" onClick={() => setDisplay(false)}><MdEdit/></button></Link>
                        <button className="text-s" onClick={() => onDelete(id)}><MdDelete/></button>
                    </div>  
                </div>
                <p className="text-xs pt-1 date">by {creator}</p>
                <div className="flex w-10  pb-1">
                    <button onClick={() => addLikes(id)} className="heart">❤️ <span className="mx-1 text-xs">{likes}</span></button>
                </div>
                            {/* <p>{photo.description}</p>  */}
                            
             </article>
                      
        </>
     )
}




export default memo(Photo)


// import React, { memo } from 'react'
// import PropTypes from 'prop-types'


// const Photo = ({ id, body, onDelete, onPost, onUpdate }) => {
//   return (

//     <div className="pt-1 pb-2">
//     <Link to='/editpost'><button className="text-s"><MdEdit/></button></Link>
//      <button className="text-s"><MdDelete/></button>
//                     </div>
//     // <Panel header={<h1>{id}</h1>} bordered style={{ margin: 20 }}>
//     //   {body}
//     //   <ButtonToolbar style={{ marginTop: 10 }}>
//     //     <Button size="lg" color="red" onClick={() => onDelete(id)}>
//     //       Delete
//     //     </Button>
//     //     <Button
//     //       size="lg"
//     //       color="cyan"
//     //       onClick={() => onPatch(id, { body: 'NEW TEXT' })}
//     //       //   onClick={() => onUpdate(id, { body: 'NEW TEXT' })}
//     //     >
//     //       Patch
//     //     </Button>
//     //   </ButtonToolbar>
//     // </Panel>
//   )
// }

// Comment.propTypes = {
//   id: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   onPost: PropTypes.func.isRequired,
//   onUpdate: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// }

// export default memo(Photo)