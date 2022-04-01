import React from "react";
import PropTypes from 'prop-types'
import { IoExpand } from "react-icons/io5";
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from "react-router-dom";

const Photo = ({ photo }) => {
    return (
        <>
            <article key={photo.id} className=' relative text-sm cards'>
                <img src={photo.image} alt='post' className='rounded-lg'/>
                <button className='absolute top-0 right-0 mr-1 mt-1 text-2xl p-5'><IoExpand className='absolute top-0 right-0 mr-1 mt-1'/></button>
                <div className='flex justify-between'>
                    <h3 className="font-bold pt-1">{photo.caption}</h3>
                    <div className="pt-1 pb-2">
                        <Link to='/editpost'><button className="text-s"><MdEdit/></button></Link>
                        <button className="text-s"><MdDelete/></button>
                    </div>
                </div>
                <div className="flex w-10  pb-1">
                    <button onClick='add' className="heart">❤️</button>
                </div>
                            {/* <p>{photo.description}</p>  */}
                            
             </article>
                      
        </>
     )
}




export default Photo


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