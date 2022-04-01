import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
  } from '@reduxjs/toolkit'
import axios from 'axios'



const baseURL = 'https://photo-memories-forever.herokuapp.com/'

  export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async (_, {dispatch}) => {            
       const data = await axios.get(
            `${baseURL}api/photos`)
            .then((res) => res.data)
            dispatch(setAllPhotos(data))
    }
  )
  
    // axios.get(`${baseURL}api/photos`).then((res) =>
    //     // console.log(res.data)
        
      

  
//   export const deletePhoto = createAsyncThunk(
//     'photo/deletePhoto',
//     async (id) => {
//       await axios.delete(`${baseURL}api/photos/${id}`, {
//         method: 'DELETE',
//       })
//       return id
//     }
//   )
  
//   export const editPhoto = createAsyncThunk(
//     'photo/editPhoto',
//     async ({ id, newObj }) => {
//       await axios.put(`${baseURL}api/photos${id}`, {
//         method: 'PATCH',
//         body: JSON.stringify(newObj),
//       })
//       return { id, changes: newObj }
//     }
//   )
  
  const photosAdapter = createEntityAdapter({
    selectId: (photo) => photo.id,
  })
  
//   const likesAdapter = createEntityAdapter({
//     selectId: (like) => like.id,
//   })
  
//   const tagsAdapter = createEntityAdapter({
//     selectId: (tag) => tag.id,
//   })
  
  const photosSlice = createSlice({
    name: 'photos',
    initialState: photosAdapter.getInitialState({
      loading: false,
    //   likes: likesAdapter.getInitialState(),
    //   tags: tagsAdapter.getInitialState(),
    }),
    reducers: {
      setAllPhotos: photosAdapter.setAll,
    //   setOnePhotos: photosAdapter.removeOne,
    //   setManyPhotos: photosAdapter.addMany,
    //   updateOnePhotos: photosAdapter.updateOne,
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
    //   [deletePhoto.rejected](state) {
    //     state.loading = false
    //   },
    //   [deletePhoto.pending](state) {
    //     state.loading = true
    //   },
    //   [deletePhoto.fulfilled](state, { payload: id }) {
    //     state.loading = false
    //     photosAdapter.removeOne(state, id)
    //   },
    //   [editPhoto.pending](state) {
    //     state.loading = true
    //   },
    //   [editPhoto.fulfilled](state, { payload }) {
    //     state.loading = false
    //     photosAdapter.updateOne(state, {
    //       id: payload.id,
    //       changes: payload.changes,
    //     })
      //},
    }, })
//   })
  
//   export const photosSelectors = photosAdapter.getSelectors(
//     (state) => state.photos
//   )
  
//   export const likesSelectors = likesAdapter.getSelectors(
//     (state) => state.Photos.likes
//   )

export const photoSelectors = photosAdapter.getSelectors(state => state.photos)
  
  export const {
    setAllPhotos,
    // setManyPhotos,
    // setOnePhotos,
    // updateOnePhoto,
    // removeLikes,
    // removeTagById,
  } = photosSlice.actions
  
  export default photosSlice.reducer