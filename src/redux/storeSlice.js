import { createSlice } from '@reduxjs/toolkit'

export const storeSlice = createSlice({
  name: 'items',
  initialState: [1, 2] ,
  reducers: {
    data: (state) => {
      console.log("I am here.");
    },
  },
})

// Action creators are generated for each case reducer function
export const storeAction = storeSlice.actions

export default storeAction