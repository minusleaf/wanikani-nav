import { configureStore, combineReducers } from "@reduxjs/toolkit";
import kanjiListSlice from "./kanjiListSlice";
import popupWindowSlice from "./popupWindowSlice";

const reducer = combineReducers({
	popupWindow: popupWindowSlice,
	kanjiList: kanjiListSlice,
});

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
