import { configureStore } from '@reduxjs/toolkit'
import permissionReducer from '../Slices/permissions'
import activeReducer from '../Slices/active'

export default configureStore({
  reducer: {
    activePage: activeReducer,
    permissions: permissionReducer
  }
})