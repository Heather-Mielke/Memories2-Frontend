import React, { useEffect, useCallback } from 'react'
import { 
    getPhotos, 
    photoSelectors, 
    deletePhoto  
} from './photoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Photo from '../Photo'

const Photos = () => {
    const dispatch = useDispatch()
    // const total = useSelector(photoSelectors.selectTotal)
    const allPhotos = useSelector(photoSelectors.selectAll)
    const onDelete = useCallback((id) =>{
        dispatch(deletePhoto(id))
    }, [])   
console.log( allPhotos)
    useEffect(()=> {
        dispatch(getPhotos())
    }, [])

  return  (
      <>
        <div className=' flex justify-center mt-16'>
             <h2 className=' text-3xl text-white title new-post'>Discover</h2>
         </div>
        <section className="masonary-container">
          {allPhotos.map((photo)=> {
              return(
          <Photo key={photo.id} photo={photo} onDelete={onDelete}/>
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