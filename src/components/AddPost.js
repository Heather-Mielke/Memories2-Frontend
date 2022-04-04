
import React, {useEffect, useState} from 'react'
import { useDispatch} from 'react-redux'
import {createPhoto } from './photos/photoSlice'
import { useNavigate } from 'react-router-dom'



const AddPost = () => {

    const emptyPost = {image: '', caption: '', description: '', likes: 0, creator: ''}
    const [post, setPost] = useState(emptyPost)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {} = useSelector((state) => ({...state.post}))


   
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(createPhoto({post}))
      setPost({ image: '', caption: '', description: '', creator: ''})
      navigate('/discover')
      
    }

 useEffect(()=>{
  window.scrollTo({ top: 0 });
  // scroll to the top of the browser window when changing route
 }, [])

  return (
    <>
        <div className='text-center mt-16 new-post'>New Post</div>
          <form className='flex flex-col m-16 post-container' onSubmit={handleSubmit} >
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='image'
              placeholder='Image http://...' 
              onChange={(e)=> setPost({...post, image: e.target.value})}
              required/>
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='caption'
              placeholder='Caption' 
              onChange={(e)=> setPost({...post, caption: e.target.value})}
              required/>
              <input 
              className='m-5 p-2 text-black rounded-3xl'
              type='text'
              name='creator'
              placeholder='Name'
              onChange={(e)=> setPost(({...post, creator: e.target.value}))}
              />
              <textarea 
              className='m-5 py-4 px-2 pb-32 mb-20 text-black rounded-3xl' 
              type='text'
              name='description'
              placeholder='Description' 
              onChange={(e)=> setPost({...post, description: e.target.value})}
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

export default AddPost