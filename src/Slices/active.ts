import { createSlice } from '@reduxjs/toolkit'

export const activeSlice = createSlice({
  name: 'active',
  initialState: {
    value: ""
  },
  reducers: {
    setActive: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setActive } = activeSlice.actions
export const getActive = (state: any) => state.activePage.value


export default activeSlice.reducer