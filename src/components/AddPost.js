
import axios from 'axios'
import React, {useState} from 'react'
import { AiFillPauseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import posts from '../api/posts'

import { postAdded } from './postsSlice'
// import { selectAllUsers } from './users/usersSlice'

const AddPost = () => {
    const emptyPost = {image: '', caption: '', description: ''}
    const [post, setPost] = useState(emptyPost)
    // const dispatch = useDispatch()
    // const [image, setImage] = useState('')
    // const [caption, setCaption] = useState('')
    // const [description, setDescription] = useState('')
    // const [userId, setUserId] = useState('')
    const baseURL = 'https://photo-memories-forever.herokuapp.com'

    // const users = useSelector(selectAllUsers)

    // const onImageChanged = e => setImage(e.target.value)
    // const onCaptionChanged = e => setCaption(e.target.value)
    // const onDescriptionChanged = e => setDescription(e.target.value)
    // const onAuthorChanged = e => setUserId(e.target.value)

    // const onSavePostClick = () => {
    //     if ( image && caption && description) {
    //         dispatch(
    //             postAdded(image, caption, description, userId)
    //         )
    //         setImage('')
    //         setCaption('')
    //         setDescription('')
    //     }
    // }

    // const canSave = Boolean(image) && Boolean(caption) && Boolean(description)

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       axios.post(`${baseURL}/api/photos`, post)
       .then((res)=> {
           console.log(res)
       })
    //    props.handleCreate(post)
    }
  

  return (
    <>
        <div className='text-center mt-16 new-post'>New Post</div>
          <form className='flex flex-col m-16 post-container' onSubmit={handleSubmit} >
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='image'
              value={post.image}
              placeholder='Image http://...' 
              onChange={handleChange}
              required/>
              {/* <input className='m-5 p-2 text-black rounded-3xl' 
              value={userId} onChange={onAuthorChanged}>
                  
                 
                  </input> */}
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='caption'
              value={post.caption}
              placeholder='Caption' 
              onChange={handleChange}
              required/>
              <textarea 
              className='m-5 py-4 px-2 pb-32 mb-20 text-black rounded-3xl' 
              type='text'
              name='description'
              value={post.description}
               placeholder='Description' 
               onChange={handleChange}
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