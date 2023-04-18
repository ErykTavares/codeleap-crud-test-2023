import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
			console.log(action.payload.profile.userName);
			state.profile = action.payload.profile;
		}
	}
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
