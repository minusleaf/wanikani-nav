import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Really doesn't need to exist, but I wanted to try different slices out.

export interface PopupWindowSliceInterface {
	isVisible: boolean;
}

const initialState: PopupWindowSliceInterface = {
	isVisible: false,
};

const popupWindowSlice = createSlice({
	name: "popupWindow",
	initialState,
	reducers: {
		openPopupWindow: (state: PopupWindowSliceInterface) => {
			return { ...state, isVisible: true };
		},
		closePopupWindow: (state: PopupWindowSliceInterface) => {
			return { ...state, isVisible: false };
		},
	},
});

export const { openPopupWindow, closePopupWindow } = popupWindowSlice.actions;
export const popupWindowSelector = (state: RootState) => state.popupWindow;

export default popupWindowSlice.reducer;
