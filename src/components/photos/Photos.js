import React, { useEffect, useCallback, useState} from 'react'
import { 
    getPhotos, 
    photoSelectors, 
    deletePhoto,  
    // updatePhoto,
    // updateOnePhoto
} from './photoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Photo from '../Photo'
import { useLocation } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

//this helps minimize rerenders having many things in parent
const Photos = () => {
    const dispatch = useDispatch()
    const allPhotos = useSelector(photoSelectors.selectAll)
    const onDelete = useCallback((id) =>{
        dispatch(deletePhoto(id))
    }, []) 
    const [query, setQuery] = useState('')

// const onUpdate = useCallback((id, newObj) => {
//     dispatch(updateOnePhoto({id, changes: newObj}))
// }, [])
    useEffect(()=> {
        dispatch(getPhotos())
       
    }, [])

   
  return  (
      <>
        <div className='search-container'>
            <BsSearch className='search-icon'/>
            <input 
            type='text'
            placeholder='Search' 
            className='text-2xl search' 
            onChange={e => setQuery(e.target.value)}/>
        </div>
        <section className="masonary-container">
          {allPhotos.filter((photo) => {
              if(photo.caption.includes(query)){
                  return photo
              }else if(photo.caption.toLowerCase().includes(query)) {
                    return photo
              }else if(photo.description.includes(query)){
                  return photo
              }else if (photo.description.toLowerCase().includes(query)) {
                  return photo
              }
              
          })
          .map(({ id, image, caption, description, likes, creator})=> {
              return(
          <Photo 
          key={id} 
          id={id} 
          image={image}
          caption={caption}
          description={description}
          likes={likes}
          creator={creator}
          onDelete={onDelete} 
           />
              ) 
            })}
        </section> 
     </>  
  )
}


export default Photos











// import React, { useEffect, useCallback } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   getPhotos,
//   photosSelectors,
//   deletePhoto,
//   postPhoto,
//   updateOnePhoto,
// //   likesSelectors,
// //   removeLikes,
//   removeTagById,
// } from './photoSlice'
// import Photo from './components/Photo'


// const Photos = () => {
//   const dispatch = useDispatch()
//   const allPhotos = useSelector(photosSelectors.selectAll)
// //   const allNestedLikes = useSelector(likesSelectors.selectAll)
//   const onDelete = useCallback((id) => dispatch(deletePhoto(id)), [])
//   const onPost = useCallback(
//     (id, newObj) => dispatch(postPhoto({ id, newObj })),
//     []
//   )
//   const onUpdate = useCallback((id, newObj) => {
//     dispatch(updateOnePhoto({ id, changes: newObj }))
//   }, [])

//   useEffect(() => {
//     dispatch(getPhotos())
//   }, [])

// //   console.log({ allNestedLikes })

//   return (
//     <>
//       <Button color="yellow" size="lg" onClick={() => dispatch(removeLikes())}>
//         DELETE ALL LIKES
//       </Button>
//       <Button
//         color="blue"
//         size="lg"
//         onClick={() =>
//           dispatch(removeTagById('a882d44c-0baf-4d26-844e-8f20a0aa8323'))
//         }
//       >
//         REMOVE TAGE BY ID
//       </Button>
//       {allPhotos.map(({ id, body }) => (
//         <Photo
//           key={id}
//           id={id}
//           body={body}
//           onPost={onPost}
//           onDelete={onDelete}
//           onUpdate={onUpdate}
//         />
//       ))}
//     </>
//   )
// }

// export default Photos