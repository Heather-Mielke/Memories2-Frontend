// import React, { useState } from 'react'
// import './Expand.css'
// import { MdOutlineCloseFullscreen } from 'react-icons/md'
// const Expand = ({ id, image, caption, description, likes, creator}) => {
//   const [expand, setExpand] = useState(false)

//   const toggleModal = () => {

// }  
// return (
//     <>
//     { expand ? 
//     <div className='overlay'>
//       <div className='modal'>
//         <div className='expand-image-container'>
//           <img src={image} />
//         </div>
//         <div className='expand-contents'>
//           <h3 className='text-black caption'>{caption}</h3>
//           <p className='text-black creator'>By: {creator}</p>
//           <p className='likes'>{likes} likes</p>
//           <p className='text-black description'>{description}</p>
//         </div>
//         <button onClick={toggleModal} className='close'><MdOutlineCloseFullscreen/></button>
//       </div>
//     </div>
//     :
//     ""
//     }
//     </>
  
//   )
// }

// export default Expand