import { createSlice } from '@reduxjs/toolkit'

export const permissionSlice = createSlice({
  name: 'permissions',
  initialState: {
    value: []
  },
  reducers: {
    setPermissions: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setPermissions } = permissionSlice.actions
export const getPermissoions = (state: any) => state.permissions.value


export default permissionSlice.reducer