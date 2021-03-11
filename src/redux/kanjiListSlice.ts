import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Kanji } from "../App.interface";
import { RootState } from "./store";

export const fetchKanji = createAsyncThunk(
	"posts/fetchKanji",
	async (level: number) => {
		const baseEndpoint = "https://api.wanikani.com/v2/";
		const requestHeaders = new Headers({
			Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
		});

		const parameters = level > 0 ? `&levels=${level}` : "";
		try {
			const response = await fetch(
				baseEndpoint + "subjects/?types=kanji" + parameters,
				{
					method: "GET",
					headers: requestHeaders,
				}
			);
			const json = await response.json();
			return json.data.map((dataItem: { data: Kanji }) => dataItem.data);
		} catch (e) {
			return [];
		}
	}
);

export interface KanjiListSliceInterface {
	kanjiList: Kanji[];
	requestState: "FULFILLED" | "REJECTED" | "PENDING";
}

const initialState: KanjiListSliceInterface = {
	kanjiList: [],
	requestState: "FULFILLED",
};

const kanjiListSlice = createSlice({
	name: "kanjiList",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchKanji.fulfilled,
			(state: KanjiListSliceInterface, action) => {
				return {
					...state,
					requestState: "FULFILLED",
					kanjiList: action.payload,
				};
			}
		);
		builder.addCase(fetchKanji.pending, (state: KanjiListSliceInterface) => {
			return { ...state, requestState: "PENDING" };
		});
		builder.addCase(fetchKanji.rejected, (state: KanjiListSliceInterface) => {
			return { ...state, requestState: "REJECTED" };
		});
	},
});

export const kanjiListSelector = (state: RootState) => state.kanjiList;

export default kanjiListSlice.reducer;
