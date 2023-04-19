import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import nookies from 'nookies';

interface IUser {
	profile: { userName: string };
	auth: {};
}

const initialState: IUser = {
	profile: { userName: '' },
	auth: {}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserName(state, action: PayloadAction<IUser>) {
			state.profile = action.payload.profile;
			nookies.set(null, 'profile', JSON.stringify(action.payload.profile));
		},
		removeUserName(state) {
			state.profile = initialState.profile;
			nookies.destroy(null, 'profile');
		}
	}
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
