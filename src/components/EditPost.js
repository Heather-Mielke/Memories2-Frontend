import axios from 'axios'
import React, {useState} from 'react'


const EditPost = (props) => {
    const emptyPost = {}
    const [post, setPost] = useState(emptyPost)

    const baseURL = 'https://photo-memories-forever.herokuapp.com'

  

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    const handleUpdate = (e) => {
       e.preventDefault()
       axios.put(`${baseURL}/api/photos`, post)
       .then((res)=> {
           console.log(res)
       })
    //    props.handleCreate(post)
    }

console.log()
  return (
    <>
        <div className='text-center mt-16 new-post'>Edit Post</div>
          <form className='flex flex-col m-16 post-container' onSubmit={handleUpdate} >
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='image'
              value={post.image}
              onChange={handleChange}
              required/>
              <input 
              className='m-5 p-2 text-black rounded-3xl' 
              type='text' 
              name='caption'
              value={post.caption}
              onChange={handleChange}
              required/>
              <textarea 
              className='m-5 py-4 px-2 pb-32 mb-20 text-black rounded-3xl' 
              type='text'
              name='description'
              value={post.description} 
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

export default EditPost