import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Jane Doe'},
    {id: '1', name: 'Will Boon'},
    {id: '2', name: 'Tammy Turner'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users 

export default userSlice.reducer