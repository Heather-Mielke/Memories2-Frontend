import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
  } from '@reduxjs/toolkit'
import axios from 'axios'




const baseURL = 'https://photo-memories-forever.herokuapp.com/'

//Get all Photos
  export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async (_, {dispatch}) => {            
       const data = await axios.get(
            `${baseURL}api/photos`)
            .then((res) => res.data)
            dispatch(setAllPhotos(data))
            
    }
  )
 
  //Delete a photo
  export const deletePhoto = createAsyncThunk(
    'photo/deletePhoto',
    async (id) => {
      await axios.delete(`${baseURL}api/photos/${id}`, {
        method: 'DELETE',
      })
      return id
    }
  )
//Create a Photo post
  export const createPhoto = createAsyncThunk(
    'photo/createPhoto',
    async ({post}) => {
      await axios.post(`${baseURL}api/photos`, post) 
       .then((res)=> console.log(res.data)
        
  )})

  //Edits the caption only right now
  export const updatePhoto = createAsyncThunk(
    'photo/updatePhoto',
    async ({ id, image, caption, description }) => {
      await axios.put(`${baseURL}api/photos/${id}`, {
          image: image,
          caption: caption,
          description: description
      }) 
      .then((res)=> {console.log(res.data)}
      
    )})
  
  const photosAdapter = createEntityAdapter({
    selectId: (photo) => photo.id,
  })
  

  
  const photosSlice = createSlice({
    name: 'photos',
    initialState: photosAdapter.getInitialState({
      loading: false,
        image: '',
        caption: '',
        description: ''
    }),
    reducers: {
      setAllPhotos: photosAdapter.setAll,
      setOnePhotos: photosAdapter.removeOne,
      setManyPhotos: photosAdapter.addMany,
      updateOnePhotos: photosAdapter.updateOne,
      setUpdate : (state, action) => {
        //   state.edit = action.payload.edit
          state.image = action.payload.image
          state.caption = action.payload.caption
          state.description = action.payload.description
      }
    },
    extraReducers: {
      [getPhotos.pending](state) {
        state.loading = true
      },
      [getPhotos.fulfilled](state, { payload }) {
        state.loading = false
        photosAdapter.setAll(state, payload)
      },
      [getPhotos.rejected](state) {
        state.loading = false
      },
      [deletePhoto.rejected](state) {
        state.loading = false
      },
      [deletePhoto.pending](state) {
        state.loading = true
      },
      [deletePhoto.fulfilled](state, { payload: id }) {
        state.loading = false
        photosAdapter.removeOne(state, id)
      },
      [updatePhoto.rejected]: (state, {payload, error})=>{
         state.loading = false  
      },
      [updatePhoto.pending](state) {
        state.loading = true
      },
      [updatePhoto.fulfilled](state, { payload }) {
        state.loading = false
        photosAdapter.updateOne(state, {
          id: payload.id,
          changes: payload.changes,
        })
      },
      [createPhoto.rejected](state, action) {
        state.loading = false
        state.error = action.payload
      },
      [createPhoto.pending](state) {
        state.loading = true
      },
      [createPhoto.fulfilled](state, action ) {
        state.loading = false
        photosAdapter.post=[action.payload]
      },
    }, 
  })
  


export const photoSelectors = photosAdapter.getSelectors(state => state.photos)
  
  export const {
    setAllPhotos,
    setManyPhotos,
    setOnePhotos,
    updateOnePhoto,
    setUpdate
  } = photosSlice.actions
  
  export default photosSlice.reducer