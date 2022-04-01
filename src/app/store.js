import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../components/postsSlice'
import userReducer from '../components/users/usersSlice'
import photosReducer from '../components/photos/photoSlice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer,
        photos: photosReducer
    }
})