import { configureStore } from '@reduxjs/toolkit'
import activeReducer from '../Slices/active'

export default configureStore({
  reducer: {
    activePage: activeReducer,
  }
})