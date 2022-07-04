import { configureStore } from '@reduxjs/toolkit'
import activeReducer from '../reducers/active'

export default configureStore({
  reducer: {
    active: activeReducer,
  }
})