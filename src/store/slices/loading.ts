import { createSlice } from '@reduxjs/toolkit';

interface ILoadingState {
	loading: boolean;
}

const initialState: ILoadingState = {
	loading: false
};

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		showLoading(state) {
			state.loading = true;
		},
		hiddenLoading(state) {
			state.loading = false;
		}
	}
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;
