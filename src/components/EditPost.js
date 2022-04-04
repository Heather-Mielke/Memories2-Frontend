import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { updatePhoto} from './photos/photoSlice'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'

const EditPost = () => {
   
   
    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')
    const [description, setDescription] = useState('')
    const params = useParams()

    // const baseURL = 'https://photo-memories-forever.herokuapp.com'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { update } = useSelector((state) => ({...state.post}))
    const id = params.id

    
        const handleUpdate = (e) => {
            e.preventDefault()
            dispatch(updatePhoto({id, image, caption, description}))
            navigate('/discover')
        }

    useEffect(()=> {
      
      const getPhotoDetails = async () => {
        let result = await axios.get(`https://photo-memories-forever.herokuapp.com/api/photos/${params.id}`)
         result = await result.data
             setImage(result.image)
             setCaption(result.caption)
             setDescription(result.description)
         }
       getPhotoDetails()
     
    }, [params.id])


  return (
    <>
        <div className='text-center mt-16 new-post'>Edit Post</div>
          <form className='flex flex-col m-16 post-container' onSubmit={handleUpdate} >
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required/>
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='caption'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required/>
              <textarea 
              className='m-5 py-4 px-2 pb-32 mb-20 text-black rounded-3xl' 
              type='text'
              name='description'
              value={description} 
               onChange={(e) => setDescription(e.target.value)}
               />
              <button 
              className='  rounded-3xl text-4xl edit-btn w-28 mx-auto mb-80 submit' 
              value='submit'
              type='submit'
              >
                Post
              </button>
          </form>
    </>

  )
}

export default EditPost