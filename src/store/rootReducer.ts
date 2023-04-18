import { combineReducers } from '@reduxjs/toolkit';
import loadingReducer from './slices/loading';
import userReducer from './slices/authSlice';

export default combineReducers({
	loadingReducer,
	userReducer
});
